import { User } from "@models"

import { UserAction, UserActionTypes } from "./types"

const INITIAL_STATE: User = {
  name: ""
}

function reducer(state: User = INITIAL_STATE, action: UserAction): User {
  switch (action.type) {
    case UserActionTypes.SET_NAME:
      return { ...state, name: action.payload }

    case UserActionTypes.SET_ROOM:
      return { ...state, room: action.payload }

    case UserActionTypes.SET_USER:
      return { ...action.payload }

    default:
      return state
  }
}

export default reducer
