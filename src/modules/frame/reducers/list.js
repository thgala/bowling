import {
  INIT_FRAME_LIST,
  ROLLING_STARTED,
  ROLLING_STOPED,
} from '../actionTypes'
import { arrayFromNumber } from '../helpers'

/*
  [
    {
      isActive: false,
      playerId: 1,
      number: 1,
      rollList: [
        {
          score: 10,
          played: false,
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
            isActive: k === 0 && i === 0,
            playerId: playerList[i].id,
            number: k + 1,
            rollList: rollList.map(() => ({
              score: 0,
              played: false,
            })),
            status: '',
            totalScore: 0,
          })
        }
      }
      return list

    case ROLLING_STOPED:
      // let newList = state.slice()

      // for (let i = 0; i < state.length; i++) {
      //   if(state[i].isActive && (state.length -1 !== i)){

      //     newList[i].rollList =
      //     break
      //   }
      // }

      // return newList

    default:
      return state
  }
}
