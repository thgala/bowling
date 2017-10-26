import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  CHANGE_PLAYERS_ORDER,
} from '../actionTypes'

const defaultState = []

export default function playerList (state = defaultState, action) {
  switch (action.type) {

    case ADD_PLAYER:
      return state.concat([{
        id: 'dfsdf',
        name: action.name,
        order: state.length + 1
      }])

    case REMOVE_PLAYER:
      return state // remove player

    case CHANGE_PLAYERS_ORDER:
      return state // change player order

    default:
      return state
  }
}
