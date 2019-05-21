import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { AppState } from "/redux/reducers"
import { UserActions } from "/redux/user"
import { userSelector } from "/redux/user/selectors"
import { ReduxScreenProps } from "/utils/types"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state)
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch)
})

export const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)

export type SampleReduxProps = ReduxScreenProps<typeof withRedux>
