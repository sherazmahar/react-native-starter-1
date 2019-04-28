import { combineReducers } from "redux"

import { USER } from "@redux/user/selectors"

import userReducer from "./user/reducers"

const reducers = combineReducers({
  [USER]: userReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
