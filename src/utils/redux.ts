import { AnyAction } from "redux"

export interface ReduxAction<T> extends AnyAction {
  type: T
}

export interface ReduxPayloadAction<T extends string, P> extends AnyAction {
  type: T
  payload: P
}

type PayloadType<T> = T extends ReduxPayloadAction<any, infer X> ? X : never

export function createPayloadAction<T extends ReduxPayloadAction<string, PayloadType<T>>>(type: string) {
  return (value: PayloadType<T>) => ({ type, payload: value })
}

export function createAction(type: string) {
  return () => ({ type })
}
