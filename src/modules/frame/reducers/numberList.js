import {
  INIT_FRAME_LIST,
} from '../actionTypes'

const defaultState = []

export default function frameNumberList (state = defaultState, action) {
  switch (action.type) {

    case INIT_FRAME_LIST:
      const { headerFramesList } = action
      return headerFramesList.map((it, i) => (i + 1))

    default:
      return state
  }
}
