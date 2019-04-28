import { combineReducers } from "redux"

import loadStateReducer from "./LoadState/reducers"
import { AppReducerType } from "./types"
import userReducer from "./User/reducers"

const reducers = combineReducers({
  [AppReducerType.USER]: userReducer,
  [AppReducerType.LOAD_STATE]: loadStateReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
