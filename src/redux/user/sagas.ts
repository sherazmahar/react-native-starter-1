import { AnyAction } from "redux"
import { all, call, put, takeEvery } from "redux-saga/effects"

import api from "@apis"
import { ApiResponse } from "@apis/types"
import { User } from "@models"
import { setUserLoadState } from "@redux/LoadState/actions"

import { setUser } from "./actions"
import { GetUserAction, SagaUserActionTypes } from "./types"

function* getUser(action: GetUserAction) {
  yield put(setUserLoadState({ isLoading: true }))

  const response: ApiResponse<User> = yield call(api.user.getInfo, action.payload)

  if (response.data) {
    yield put(setUser(response.data))
    yield put(setUserLoadState({ isLoading: false }))
  } else {
    yield put(setUserLoadState({ isLoading: false, error: response.error }))
  }
}

function* watchGetUser() {
  yield takeEvery(SagaUserActionTypes.GET_USER, getUser)
}

export default function* userSaga() {
  yield all([watchGetUser()])
}
