import { AppReducerType } from "@redux/types"

import { LoadState, LoadStateAction, LoadStateActionTypes } from "./types"

type State = { [key in AppReducerType]: LoadState }

const INITIAL_STATE: State = {
  loadState: {}, // Ignore this field
  user: {}
}

function reducer(state = INITIAL_STATE, action: LoadStateAction): State {
  switch (action.type) {
    case LoadStateActionTypes.SET_USER_LOAD_STATE:
      return { ...state, user: action.payload }

    default:
      return state
  }
}

export default reducer
