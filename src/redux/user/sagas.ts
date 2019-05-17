import { all, call, put, takeEvery } from "redux-saga/effects"

import * as api from "/apis"
import { User } from "/models"

import { FETCH_USER_REQUEST } from "./action-types"
import { fetchUser } from "./actions"

function* getUser(action: ReturnType<typeof fetchUser.request>): Generator {
  try {
    const user: User = yield call(api.user.getInfo, action.payload)

    yield put(fetchUser.success(user))
  } catch (error) {
    yield put(fetchUser.failure(error))
  }
}

function* watchGetUser() {
  yield takeEvery(FETCH_USER_REQUEST, getUser)
}

export default function* userSaga() {
  yield all([watchGetUser()])
}
