import { createSelector } from 'reselect'
import { MODULE_NAME } from './constants'
import groupBy from 'lodash.groupby'

const moduleState = state => state[MODULE_NAME]

export const list = createSelector(
  moduleState,
  moduleState => moduleState.list,
)

export const groupedByPlayerId = createSelector(
  list,
  list => groupBy(list, 'playerId'),
)

export const groupedByNumber = createSelector(
  list,
  list => groupBy(list, 'number'),
)
