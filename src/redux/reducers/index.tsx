import { combineReducers } from "redux"

import { USER } from "@redux/constants"

import userReducer from "./user"

export default combineReducers({ [USER]: userReducer })
