import {
  INIT_GAMEPLAY,
  SET_ACTIVE_PLAYER_ID,
} from '../actionTypes'

const defaultState = null

export default function gameplayActivePlayerId (state = defaultState, action) {
  switch (action.type) {

    case INIT_GAMEPLAY:
      const { playerList } = action
      return playerList[0].id

    case SET_ACTIVE_PLAYER_ID:
      return action.id

    default:
      return state
  }
}
