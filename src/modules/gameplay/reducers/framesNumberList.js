import {
  INIT_GAMEPLAY,
} from '../actionTypes'

const defaultState = []

export default function gameplayFramesNumberList (state = defaultState, action) {
  switch (action.type) {

    case INIT_GAMEPLAY:
      return action.framesNumberList

    default:
      return state
  }
}
