import { combineReducers } from 'redux'
import list from './list'
import numberList from './numberList'

export default combineReducers({
  list,
  numberList,
})
