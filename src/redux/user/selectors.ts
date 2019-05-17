import { AppState } from "/redux/reducers"
import { AppReducerType } from "/redux/types"

export const userSelector = (state: AppState) => state[AppReducerType.USER].data

export const userStateSelector = (state: AppState) => state[AppReducerType.USER].state
