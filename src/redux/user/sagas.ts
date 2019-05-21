import { all, call, put, takeEvery } from "redux-saga/effects"

import * as api from "/apis"
import { User } from "/models"

import { UserActions } from "./index"

export function* getUser(action: ReturnType<typeof UserActions.fetchUser>): Generator {
  try {
    const user: User = yield call(api.user.getInfo, action.payload)

    yield put(UserActions.setFetchSuccess(user))
  } catch (error) {
    yield put(UserActions.setFetchError(error))
  }
}

function* watchGetUser() {
  yield takeEvery(UserActions.fetchUser.type, getUser)
}

export default function* userSaga() {
  yield all([watchGetUser()])
}
