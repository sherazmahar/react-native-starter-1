import { combineReducers } from "redux"

import { AppReducerType } from "./types"
import { UserReducer } from "./user"

const reducers = combineReducers({
  [AppReducerType.USER]: UserReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
