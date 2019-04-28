import { connect } from "react-redux"

import { userLoadStateSelector } from "@redux/LoadState/selectors"
import { AppState } from "@redux/reducers"
import { userSelector } from "@redux/User/selectors"

import UserInfo from "./UserInfo"

export function mapStateToProps(state: AppState) {
  return {
    user: userSelector(state),
    userLoadState: userLoadStateSelector(state)
  }
}

export default connect(mapStateToProps)(UserInfo)
