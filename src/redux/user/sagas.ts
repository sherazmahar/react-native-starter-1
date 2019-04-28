import { all, put, takeEvery } from "redux-saga/effects"

import { User } from "@models"
import { RoomType } from "@models/Room"
import { setUser } from "@redux/user/actions"
import { SagaUserActionTypes } from "@redux/user/types"

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* getUser() {
  yield delay(1000)

  const user: User = {
    name: "ScitBiz",
    room: {
      id: "403",
      type: RoomType.VIP
    }
  }

  yield put(setUser(user))
}

function* watchGetUser() {
  yield takeEvery(SagaUserActionTypes.GET_USER, getUser)
}

export default function* userSaga() {
  yield all([watchGetUser()])
}
