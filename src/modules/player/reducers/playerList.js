import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  CHANGE_PLAYERS_ORDER,
} from '../actionTypes'

/*
  {
    id: Number,
    name: String,
  }
*/

const defaultState = []

export default function playerList (state = defaultState, action) {
  switch (action.type) {

    case ADD_PLAYER:
      return state.concat([{
        id: Date.now(),
        name: action.name,
      }])

    case REMOVE_PLAYER:
      return state.filter(player => player.id !== action.id)

    case CHANGE_PLAYERS_ORDER:
      let list = state.slice()
      list[action.oldIndex] = list.splice(action.newIndex, 1, list[action.oldIndex])[0]

      return list


    default:
      return state
  }
}
