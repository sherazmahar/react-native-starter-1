import { Room, User } from "@models"
import { ReduxPayloadAction } from "@src/utils/redux"

export enum UserActionTypes {
  SET_USER = "SET_USER",
  SET_NAME = "SET_NAME",
  SET_ROOM = "SET_ROOM"
}

export enum SagaUserActionTypes {
  GET_USER = "GET_USER"
}

export interface SetUserAction extends ReduxPayloadAction<typeof UserActionTypes.SET_USER, User> {}

export interface SetNameAction extends ReduxPayloadAction<typeof UserActionTypes.SET_NAME, string> {}

export interface SetRoomAction extends ReduxPayloadAction<typeof UserActionTypes.SET_ROOM, Room> {}

export type UserAction = SetUserAction | SetNameAction | SetRoomAction
