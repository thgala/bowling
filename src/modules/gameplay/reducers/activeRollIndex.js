import {
  SET_ACTIVE_ROLL_INDEX,
} from '../actionTypes'

const defaultState = 0

export default function gameplayRollActiveIndex (state = defaultState, action) {
  switch (action.type) {

    case SET_ACTIVE_ROLL_INDEX:
      return action.index

    default:
      return state
  }
}
