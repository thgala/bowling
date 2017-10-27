import {
  INIT_FRAME_LIST,
} from '../actionTypes'
import { arrayFromNumber } from '../helpers'

/*
  [
    {
      playerId: 1,
      number: 1,
      rollList: [
        {
          score: 10,
        }
      ],
      status: 'strike', ['strike', 'spare', 'open']
      totalScore: 10,
    }
  ]
*/

const defaultState = []

export default function frameList (state = defaultState, action) {
  switch (action.type) {

    case INIT_FRAME_LIST:
      const { playerList, headerFramesList, rollsPerFrameList, rollsInLastFrameList } = action
      const list = []

      for (let k = 0; k < headerFramesList.length; k++) {
        const rollList = (k === headerFramesList.length - 1)
          ? rollsInLastFrameList
          : rollsPerFrameList

        for (let i = 0; i < playerList.length; i++) {
          list.push({
            playerId: playerList[i].id,
            number: k + 1,
            rollList: rollList.map(() => ({
              score: 0,
            })),
            status: '',
            totalScore: 0,
          })
        }
      }

      return list

    default:
      return state
  }
}
