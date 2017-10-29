import {
  INIT_GAMEPLAY,
  UPDATE_STATUS,
} from '../actionTypes' 
import {
  TOTAL_PINS,
} from '../constants' 

const defaultState = {
  isReady: false,
  isOver: false,
  isRolling: false,
  activePlayerIndex: 0,
  activeFrameIndex: 0,
  activeRollIndex: 0,
  pinsLeft: 10,
  lastScore: 0,
  framesNumberList: [],
}

export default function gameplayStatus (state = defaultState, action) {
  switch (action.type) {

    case INIT_GAMEPLAY:
      const { framesNumberList } = action

      return Object.assign({}, state, {
        framesNumberList,
        isReady: true,
      })

    case UPDATE_STATUS:
      const { score, nextPlayerIndex, nextFrameIndex, nextActiveRollIndex, nextPinsLeft, isOver } = action

      return Object.assign({}, state, {
        isOver: isOver,
        lastScore: score,
        activePlayerIndex: nextPlayerIndex,
        activeFrameIndex: nextFrameIndex,
        activeRollIndex: nextActiveRollIndex,
        pinsLeft: nextPinsLeft
      })

    default:
      return state
  }
}
