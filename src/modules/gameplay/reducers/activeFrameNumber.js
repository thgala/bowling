import {
  SET_ACTIVE_FRAME_NUMBER,
} from '../actionTypes'

const defaultState = 1

export default function gameplayActiveFrameNumber (state = defaultState, action) {
  switch (action.type) {

    case SET_ACTIVE_FRAME_NUMBER:
      return action.number

    default:
      return state
  }
}
