import { createAction, createPayloadAction } from "@src/utils/redux"

import { SagaUserActionTypes, SetNameAction, SetRoomAction, SetUserAction, UserActionTypes } from "./types"

// Redux actions
export const setUser = createPayloadAction<SetUserAction>(UserActionTypes.SET_USER)

export const setName = createPayloadAction<SetNameAction>(UserActionTypes.SET_NAME)

export const setRoom = createPayloadAction<SetRoomAction>(UserActionTypes.SET_ROOM)

// Saga actions
export const getUser = createAction(SagaUserActionTypes.GET_USER)
