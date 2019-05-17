import { createAsyncAction, createStandardAction } from "typesafe-actions"

import { GetUserInfoParams } from "/apis/user/types"
import { Room, User } from "/models"
import { ReduxStateType } from "/redux/types"
import {
  FETCH_USER_CANCEL,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_STATE,
  FETCH_USER_SUCCESS,
  SET_NAME,
  SET_ROOM,
  SET_USER
} from "/redux/user/action-types"

// Sagas
export const fetchUser = createAsyncAction(
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_CANCEL
)<GetUserInfoParams, User, Error>()

// Actions
export const setLoadState = createStandardAction(FETCH_USER_STATE)<ReduxStateType>()

export const setUser = createStandardAction(SET_USER)<User>()

export const setName = createStandardAction(SET_NAME)<string>()

export const setRoom = createStandardAction(SET_ROOM)<Room>()
