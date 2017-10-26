import { ADD_PLAYER, REMOVE_PLAYER, CHANGE_PLAYERS_ORDER } from './actionTypes'

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    name,
  }
}

export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER,
    id,
  }
}

export function changePlayersOrder(oldOrder, newOrder) {
  return {
    type: CHANGE_PLAYERS_ORDER,
    oldOrder,
    newOrder,
  }
}
