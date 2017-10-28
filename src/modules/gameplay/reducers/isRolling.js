import {
  ROLL_STARTED,
  ROLL_FINISHED,
} from '../actionTypes'

const defaultState = false

export default function frameRollInProcess (state = defaultState, action) {
  switch (action.type) {

    case ROLL_STARTED:
      return true

    case ROLL_FINISHED:
      return false

    default:
      return state
  }
}
