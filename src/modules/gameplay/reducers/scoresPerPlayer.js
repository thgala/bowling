import {
  INIT_GAMEPLAY,
  ADD_SCORE_TO_FRAME,
  RESET_GAMEPLAY,
} from '../actionTypes' 

const defaultState = []

export default function gameplayScoresPerPlayer (state = defaultState, action) {
  switch (action.type) {

    case INIT_GAMEPLAY:
      const { playerList, framesNumberList } = action

      return playerList.map(player => {
        return {
          name: player.name,
          frameList: framesNumberList.map((frame, i) => {
            return {
              rollList: [],
            }
          })
        }
      })

    case ADD_SCORE_TO_FRAME:
      const { score, playerIndex, frameIndex } = action

      return state.map((player, pi) => {
        return pi !== playerIndex ? player : Object.assign({}, player, {
          frameList: player.frameList.map((frame, fi) => {
            return fi !== frameIndex ? frame : Object.assign({}, frame, {
              rollList: frame.rollList.concat([score])
            })
          })
        })
      })

    case RESET_GAMEPLAY:
      return state.map((player, pi) => {
        return Object.assign({}, player, {
          frameList: player.frameList.map((frame, i) => {
            return {
              rollList: [],
            }
          })
        })
      })

    default:
      return state
  }
}
