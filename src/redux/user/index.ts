import { createActionCreators, createReducerFunction } from "immer-reducer"

import { User } from "/models"
import { ReduxData, ReduxStateType } from "/redux/types"

import UserImmerReducer from "./reducer"

const INITIAL_STATE: ReduxData<User> = {
  data: {
    id: "",
    name: ""
  },
  status: ReduxStateType.INIT
}

export const UserActions = createActionCreators(UserImmerReducer)
export const UserReducer = createReducerFunction(UserImmerReducer, INITIAL_STATE)
