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

export const scoresPerPlayer = createSelector(
  moduleState,
  moduleState => moduleState.scoresPerPlayer,
)

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

// export const scoreTable = createSelector(
//   playerList,
//   playerList => {
//     return {
//       playerList
//       // playerList: playerList.map(player => {
//       //   return Object.assign({}, player, {
//       //     frameList: player.frameList((frame, i) => {
//       //       return Object.assign({}, frame, {
//       //         total: calculateFrameTotal(index, frame, player.frameList)
//       //       })
//       //     })
//       //   })
//       // })

//     }
//   }
// )

// function calculateFrameTotal(index, frame, frameList){
//   let frameTotal = frame.total
  
//   if(frame.status === FRAME_STATUS_STRIKE){
//     total += frameList[index + 1].total + frameList[index + 1].total
//   }

//   return total
// }
