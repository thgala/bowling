import { combineReducers } from 'redux'

import activeFrameNumber from './activeFrameNumber'
import activePlayerId from './activePlayerId'
import activeRollIndex from './activeRollIndex'
import framesPerPlayer from './framesPerPlayer'
import framesNumberList from './framesNumberList'
import isRolling from './isRolling'

export default combineReducers({
  activeFrameNumber,
  activePlayerId,
  activeRollIndex,
  framesPerPlayer,
  framesNumberList,
  isRolling,
})
