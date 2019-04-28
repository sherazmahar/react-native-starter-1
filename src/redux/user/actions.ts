import { createPayloadAction } from "@utils/redux"

import {
  GetUserAction,
  SagaUserActionTypes,
  SetNameAction,
  SetRoomAction,
  SetUserAction,
  UserActionTypes
} from "./types"

// Redux actions
export const setUser = createPayloadAction<SetUserAction>(UserActionTypes.SET_USER)

export const setName = createPayloadAction<SetNameAction>(UserActionTypes.SET_NAME)

export const setRoom = createPayloadAction<SetRoomAction>(UserActionTypes.SET_ROOM)

// Saga actions
export const getUser = createPayloadAction<GetUserAction>(SagaUserActionTypes.GET_USER)
