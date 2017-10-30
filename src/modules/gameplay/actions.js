import {
  INIT_GAMEPLAY,
  ADD_SCORE_TO_FRAME,
  UPDATE_STATUS,
  RESET_GAMEPLAY,
} from './actionTypes'

import { TOTAL_FRAMES } from './constants'
import { arrayFromNumber } from './helpers'

export function init(playerList) {
  return {
    type: INIT_GAMEPLAY,
    playerList,
    framesNumberList: arrayFromNumber(TOTAL_FRAMES).map((f, i) => i + 1),
  }
}

export function addScoreToFrame(score, playerIndex, frameIndex) {
  return {
    type: ADD_SCORE_TO_FRAME,
    score,
    playerIndex,
    frameIndex,
  }
}

export function updateStatus(score, nextPlayerIndex, nextFrameIndex, nextActiveRollIndex, nextPinsLeft, isOver = false) {
  return {
    type: UPDATE_STATUS,
    score,
    nextPlayerIndex,
    nextFrameIndex,
    nextActiveRollIndex,
    nextPinsLeft,
    isOver,
  }
}

export function resetGameplay() {
  return {
    type: RESET_GAMEPLAY,
  }
}