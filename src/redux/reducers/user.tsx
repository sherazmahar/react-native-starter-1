import { User } from "@models"
import { SET_NAME } from "@redux/actions/user"
import { ReduxAction } from "@src/utils/interfaces"

const DEFAULT_STATE: User = {
  name: ""
}

export default function reducer(state = DEFAULT_STATE, action: ReduxAction): User {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }

    default:
      return state
  }
}
