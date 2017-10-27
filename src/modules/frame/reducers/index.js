import { combineReducers } from 'redux'
import { ROLLING_STARTED, ROLLING_STOPED, RESET_PINS } from '../actionTypes'
import { TOTAL_PINS } from '../constants'
import list from './list'

export default combineReducers({
  list,
  pinsLeft: (state = TOTAL_PINS, action) => {
    switch (action.type) {

      case ROLLING_STOPED:
        return action.score

      case RESET_PINS:
        return TOTAL_PINS

      default:
        return state
    }
  },
  isRolling: (state = false, action) => {
    switch (action.type) {

      case ROLLING_STARTED:
        return true

      case ROLLING_STOPED:
        return false

      default:
        return state
    }
  },
})
