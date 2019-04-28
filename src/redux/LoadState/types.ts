import { ReduxPayloadAction } from "@utils/redux"

export interface LoadState {
  isLoading?: boolean
  error?: Error
}

export enum LoadStateActionTypes {
  SET_USER_LOAD_STATE = "SET_USER_LOAD_STATE"
}

export interface UserLoadState extends ReduxPayloadAction<typeof LoadStateActionTypes.SET_USER_LOAD_STATE, LoadState> {}

export type LoadStateAction = UserLoadState
