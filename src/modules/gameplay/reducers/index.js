import { combineReducers } from 'redux'

import status from './status'
import scoresPerPlayer from './scoresPerPlayer'

export default combineReducers({
  status,
  scoresPerPlayer,
})
