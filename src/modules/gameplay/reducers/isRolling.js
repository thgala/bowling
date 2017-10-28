import {
  ROLL_STARTED,
  ROLL_STOPED,
  INIT_GAMEPLAY,
} from '../actionTypes'

const defaultState = false

export default function frameRollInProcess (state = defaultState, action) {
  switch (action.type) {

    case ROLL_STARTED:
      return true

    case ROLL_STOPED:
    case INIT_GAMEPLAY:
      return false

    default:
      return state
  }
}
