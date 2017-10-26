import { combineReducers } from 'redux'
import player from './modules/player'

const modules = [
  player,
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
