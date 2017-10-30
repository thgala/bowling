import { ADD_PLAYER, REMOVE_PLAYER, CHANGE_PLAYERS_ORDER } from './actionTypes'

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    id: Date.now(),
    name,
  }
}

export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER,
    id,
  }
}

export function changePlayersOrder(oldIndex, newIndex) {
  return {
    type: CHANGE_PLAYERS_ORDER,
    oldIndex,
    newIndex,
  }
}
