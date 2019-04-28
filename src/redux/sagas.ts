import { all } from "redux-saga/effects"

import userSaga from "./User/sagas"

export default function* rootSaga() {
  yield all([userSaga()])
}
