import { AnyAction } from "redux"

/**
 * A redux action type
 *
 * Every actions (without payload) must extend this interface
 */
export interface ReduxAction<T> extends AnyAction {
  type: T
}

/**
 * A redux action type
 *
 * Every actions (with payload) must extend this interface
 */
export interface ReduxPayloadAction<T extends string, P> extends AnyAction {
  type: T
  payload: P
}

/**
 * A simple type to extract the payload type from any redux payload action
 */
type PayloadType<T> = T extends ReduxPayloadAction<string, infer X> ? X : never

/**
 * Create a redux action (with payload)
 *
 * @param type Action type
 */
export function createPayloadAction<T extends ReduxPayloadAction<string, PayloadType<T>>>(type: string) {
  return (value: PayloadType<T>) => ({ type, payload: value })
}

/**
 * Create a redux action (without payload)
 *
 * @param type Action type
 */
export function createAction(type: string) {
  return () => ({ type })
}
