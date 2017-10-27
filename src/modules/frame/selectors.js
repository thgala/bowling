import { createSelector } from 'reselect'
import { MODULE_NAME } from './constants'

const moduleState = state => state[MODULE_NAME]

export const list = createSelector(
  moduleState,
  moduleState => moduleState.list,
)

export const numberList = createSelector(
  moduleState,
  moduleState => moduleState.numberList,
)
