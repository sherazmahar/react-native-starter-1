import { getType } from "typesafe-actions"

import { User } from "/models"
import { applyStateStatus, cancelledState, errorState, merge, successState } from "/redux/functions"
import { ReduxData, ReduxStateType } from "/redux/types"

import { fetchUser, setLoadState, setName, setRoom, setUser } from "./actions"
import { UserAction } from "./types"

const INITIAL_STATE: ReduxData<User> = {
  data: {
    id: "",
    name: ""
  },
  state: {
    status: ReduxStateType.INIT
  }
}

export default (state = INITIAL_STATE, action: UserAction): typeof INITIAL_STATE => {
  switch (action.type) {
    // Saga actions
    case getType(fetchUser.request):
      return applyStateStatus(state, ReduxStateType.LOADING)

    case getType(fetchUser.success):
      return successState(action.payload)

    case getType(fetchUser.failure):
      return errorState(state, action.payload)

    case getType(fetchUser.cancel):
      return cancelledState(state)

    // Redux actions
    case getType(setLoadState):
      return applyStateStatus(state, action.payload)

    case getType(setUser):
      return { ...state, data: action.payload }

    case getType(setName):
      return { ...state, data: merge(state.data, { name: action.payload }) }

    case getType(setRoom):
      return { ...state, data: merge(state.data, { room: action.payload }) }

    default:
      return state
  }
}
