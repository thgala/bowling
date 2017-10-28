import {
  INIT_GAMEPLAY,
  ROLL_FINISHED,
} from '../actionTypes' 
import { TOTAL_FRAMES, ROLLS_PER_FRAME, ROLLS_IN_LAST_FRAME } from '../constants'
import { arrayFromNumber } from '../helpers'

/*
  {
    [playerId]: [
      {
        frameNumber: 1,
        rolls: [],
        status: 'strike', ['strike', 'spare', 'open', ''],
        total: 0,
      }
    ]
  }
*/

const defaultState = {}

export default function gameplayFramesPerPlayer (state = defaultState, action) {
  switch (action.type) {

    case INIT_GAMEPLAY:
      const { playerList, framesNumberList } = action

      return playerList.reduce((acc, player) => {
        return Object.assign({}, acc, {
          [player.id]: framesNumberList.map((f, i) => {

            const rollList = (i === TOTAL_FRAMES - 1)
              ? arrayFromNumber(ROLLS_IN_LAST_FRAME)
              : arrayFromNumber(ROLLS_PER_FRAME)

            return {
              number: i + 1,
              rolls: rollList.map(() => ''),
              status: '',
              total: 0,
            }
          })
        })
      }, {})

    case ROLL_FINISHED:
      return state

    default:
      return state
  }
}
