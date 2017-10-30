import { createSelector } from 'reselect'
import {
  MODULE_NAME,
  TOTAL_FRAMES,
  TOTAL_PINS,
  FRAME_STATUS_STRIKE,
  FRAME_STATUS_SPARE,
  FRAME_STATUS_OPEN,
} from './constants'
import { arrayFromNumber } from './helpers'
import groupBy from 'lodash.groupby'

const moduleState = state => state[MODULE_NAME]

export const status = createSelector(
  moduleState,
  moduleState => moduleState.status,
)

export const activeFrameIndex = createSelector(
  status,
  status => status.activeFrameIndex,
)

export const activePlayerIndex = createSelector(
  status,
  status => status.activePlayerIndex
)

export const activeRollIndex = createSelector(
  status,
  status => status.activeRollIndex
)

export const isRolling = createSelector(
  status,
  status => status.isRolling
)

export const isOver = createSelector(
  status,
  status => status.isOver
)

export const pinsLeft = createSelector(
  status,
  status => status.pinsLeft
)

export const lastScore = createSelector(
  status,
  status => status.lastScore
)

export const isReady = createSelector(
  status,
  status => status.isReady
)

export const framesNumberList = createSelector(
  status,
  status => status.framesNumberList
)

export const scoresPerPlayer = createSelector(
  moduleState,
  moduleState => moduleState.scoresPerPlayer.map(player => {
    return Object.assign({}, player, {
      frameList: player.frameList.map((frame, i) => {
        return Object.assign({}, frame, {
          total: calculateFrameTotal(i, frame, player.frameList)
        })
      })
    })
  })
)

function calculateFrameTotal(index, frame, frameList){
  const { rollList } = frame
  const nextFrameRolls = frameList[index + 1] ? frameList[index + 1].rollList : []
  const nextFramePlusRolls = frameList[index + 2] ? frameList[index + 2].rollList : []
  let total = 0

  if(rollList[0] === TOTAL_PINS){
    total = TOTAL_PINS + findNextRoll(nextFrameRolls) + findNextPlusRoll(nextFrameRolls, nextFramePlusRolls)
  } else if (rollList[0] + rollList[1] === TOTAL_PINS) {
    total = TOTAL_PINS + findNextRoll(nextFrameRolls)
  } else {
    total = rollList.reduce((acc, val) => acc + parseInt(val), 0)
  }

  return total
}

function findNextRoll(nextFrameRolls){
  return checkRoll(nextFrameRolls, 0) ? 0 : nextFrameRolls[0]
}

function findNextPlusRoll(nextFrameRolls, nextFramePlusRolls){
  return checkRoll(nextFrameRolls, 1) ? lookNextFrame(nextFramePlusRolls) : nextFrameRolls[1]
}

function lookNextFrame(nextFramePlusRolls){
  return checkRoll(nextFramePlusRolls, 0) ? 0 : nextFramePlusRolls[0]
}

function checkRoll(rollList, index){
  return typeof rollList[index] === 'undefined'
}
