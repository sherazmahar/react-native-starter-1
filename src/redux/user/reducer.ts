import { ImmerReducer } from "immer-reducer"

import { GetUserInfoParams } from "/apis/user/types"
import { User } from "/models"
import { ReduxData, ReduxStateType } from "/redux/types"

export default class UserImmerReducer extends ImmerReducer<ReduxData<User>> {
  fetchUser(params: GetUserInfoParams) {
    this.draftState.status = ReduxStateType.LOADING
  }

  setFetchSuccess(data: User) {
    this.draftState.status = ReduxStateType.LOADED
    this.draftState.data = data
  }

  setFetchError(error: Error) {
    this.draftState.status = ReduxStateType.ERROR
    this.draftState.error = error
  }

  setUser(data: User) {
    this.draftState.data = data
  }

  updateUser(user: User) {
    this.draftState.data = {
      ...this.draftState.data,
      ...user
    }
  }
}
