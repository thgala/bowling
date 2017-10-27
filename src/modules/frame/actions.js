import { INIT_FRAME_LIST, ROLLING_STARTED, ROLLING_STOPED, RESET_PINS } from './actionTypes'
import { arrayFromNumber, getRandomInt } from './helpers'
import { pinsLeft as pinsLeftSelector } from './selectors'

export function initFrameList(playerList, totalFrames, rollsPerFrame, rollsInLastFrame) {
  return {
    type: INIT_FRAME_LIST,
    playerList,
    headerFramesList: arrayFromNumber(totalFrames),
    rollsPerFrameList: arrayFromNumber(rollsPerFrame),
    rollsInLastFrameList: arrayFromNumber(rollsInLastFrame),
  }
}

export function rollTheBall() {
  return (dispatch, getState) => {
    const pinsLeft = pinsLeftSelector( getState() )

    dispatch({ type: ROLLING_STARTED })
    setTimeout(() => {
      dispatch({
        type: ROLLING_STOPED,
        score: getRandomInt(1, pinsLeft)
      })
    }, 3000)
  }
}

export function resetPins() {
  return {
    type: RESET_PINS
  }
}
