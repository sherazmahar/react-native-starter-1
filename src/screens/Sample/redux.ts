import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { AppState } from "/redux/reducers"
import { fetchUser } from "/redux/user/actions"
import { userSelector } from "/redux/user/selectors"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state)
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  userActions: bindActionCreators({ fetchUser: fetchUser.request }, dispatch)
})

export type SampleReduxProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)
