import { AppState } from "@redux/reducers"
import { AppReducerType } from "@redux/types"

export const loadStateSelector = (state: AppState) => state[AppReducerType.LOAD_STATE]

export const userLoadStateSelector = (state: AppState) => loadStateSelector(state).user
