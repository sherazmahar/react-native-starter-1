import { AppState } from "@redux/reducers"

export const USER = "user"

export const userSelector = (state: AppState) => state[USER]

export const nameSelector = (state: AppState) => userSelector(state).name

export const roomSelector = (state: AppState) => userSelector(state).room
