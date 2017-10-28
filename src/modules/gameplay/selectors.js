import { createSelector } from 'reselect'
import { MODULE_NAME, TOTAL_FRAMES } from './constants'
import { arrayFromNumber } from './helpers'
import groupBy from 'lodash.groupby'

const moduleState = state => state[MODULE_NAME]

export const activeFrameNumber = createSelector(
  moduleState,
  moduleState => moduleState.activeFrameNumber,
)

export const activePlayerId = createSelector(
  moduleState,
  moduleState => moduleState.activePlayerId
)

export const activeRollIndex = createSelector(
  moduleState,
  moduleState => moduleState.activeRollIndex
)

export const framesPerPlayer = createSelector(
  moduleState,
  moduleState => moduleState.framesPerPlayer || {}
)

export const isRolling = createSelector(
  moduleState,
  moduleState => moduleState.isRolling
)

export const framesNumberList = createSelector(
  moduleState,
  moduleState => moduleState.framesNumberList
)
