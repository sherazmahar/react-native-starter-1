import { AppState } from "@redux/reducers"
import { AppReducerType } from "@redux/types"

export const userSelector = (state: AppState) => state[AppReducerType.USER]

export const nameSelector = (state: AppState) => userSelector(state).name

export const roomSelector = (state: AppState) => userSelector(state).room
