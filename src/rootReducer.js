import { combineReducers } from 'redux'

import Player from './modules/player'
import Gameplay from './modules/gameplay'

const modules = [
  Player,
  Gameplay,
]

const reducers = modules
  .reduce((sum, module) => {
    return !module.reducer
      ? sum
      : Object.assign({}, sum, {
          [module.constants.MODULE_NAME]: module.reducer
        })
  }, {})


export default combineReducers(reducers)
