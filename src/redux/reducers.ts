import { combineReducers } from "redux"

import { AppReducerType } from "./types"
import userReducer from "./user/reducer"

const reducers = combineReducers({
  [AppReducerType.USER]: userReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
