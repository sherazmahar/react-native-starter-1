import { ReduxData, ReduxStateType } from "/redux/types"

export function successState<T>(payload: T): ReduxData<T> {
  return {
    data: payload,
    state: {
      status: ReduxStateType.LOADED,
      error: undefined
    }
  }
}

export function errorState<T>(state: ReduxData<T>, error: Error): ReduxData<T> {
  return {
    ...state,
    state: {
      status: ReduxStateType.ERROR,
      error
    }
  }
}

export function cancelledState<T>(state: ReduxData<T>): ReduxData<T> {
  return {
    ...state,
    state: {
      ...state.state,
      status: ReduxStateType.CANCELLED
    }
  }
}

export function applyStateStatus<T>(state: ReduxData<T>, status: ReduxStateType): ReduxData<T> {
  return {
    ...state,
    state: {
      ...state.state,
      status
    }
  }
}

export function merge<T>(data: T, params: { [key in keyof T]?: T[key] }) {
  return { ...data, ...params }
}
