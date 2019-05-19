import { connect } from "react-redux"

import { AppState } from "/redux/reducers"
import { userSelector, userStateSelector } from "/redux/user/selectors"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state),
  loadState: userStateSelector(state)
})

export type UserInfoReduxProps = ReturnType<typeof mapStateToProps>

export const withRedux = connect(mapStateToProps)
