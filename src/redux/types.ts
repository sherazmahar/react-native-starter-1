export enum AppReducerType {
  USER = "user"
}

export enum ReduxStateType {
  INIT = "init",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
  CANCELLED = "cancelled"
}

export interface ReduxState {
  status: ReduxStateType
  error?: Error
}

export interface ReduxData<T> {
  data: T
  state: ReduxState
}
