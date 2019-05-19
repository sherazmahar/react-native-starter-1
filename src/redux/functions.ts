import { ReduxData, ReduxStateType } from "/redux/types"

export const successState = <T>(payload: T): ReduxData<T> => {
  return {
    data: payload,
    state: {
      status: ReduxStateType.LOADED,
      error: undefined
    }
  }
}

export const errorState = <T>(state: ReduxData<T>, error: Error): ReduxData<T> => {
  return {
    ...state,
    state: {
      status: ReduxStateType.ERROR,
      error
    }
  }
}

export const cancelledState = <T>(state: ReduxData<T>): ReduxData<T> => {
  return {
    ...state,
    state: {
      ...state.state,
      status: ReduxStateType.CANCELLED
    }
  }
}

export const applyStateStatus = <T>(state: ReduxData<T>, status: ReduxStateType): ReduxData<T> => {
  return {
    ...state,
    state: {
      ...state.state,
      status
    }
  }
}

export const merge = <T>(data: T, params: { [key in keyof T]?: T[key] }) => {
  return { ...data, ...params }
}
