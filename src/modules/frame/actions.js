import { INIT_FRAME_LIST } from './actionTypes'
import { arrayFromNumber } from './helpers'

export function initFrameList(playerList, totalFrames, rollsPerFrame, rollsInLastFrame) {
  return {
    type: INIT_FRAME_LIST,
    playerList,
    headerFramesList: arrayFromNumber(totalFrames),
    rollsPerFrameList: arrayFromNumber(rollsPerFrame),
    rollsInLastFrameList: arrayFromNumber(rollsInLastFrame),
  }
}
