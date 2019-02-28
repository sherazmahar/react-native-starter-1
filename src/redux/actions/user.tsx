import { ReduxAction } from "@utils/interfaces"

export const SET_NAME = "SET_NAME"

export function setName(name: string): ReduxAction {
  return {
    type: SET_NAME,
    payload: name
  }
}
