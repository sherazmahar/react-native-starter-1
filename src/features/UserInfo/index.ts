import { connect } from "react-redux"

import { AppState } from "/redux/reducers"
import { userSelector, userStateSelector } from "/redux/user/selectors"

import UserInfo from "./UserInfo"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state),
  loadState: userStateSelector(state)
})

export default connect(mapStateToProps)(UserInfo)
