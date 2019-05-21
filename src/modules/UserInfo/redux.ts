import { connect } from "react-redux"

import { AppState } from "/redux/reducers"
import { userSelector, userStateSelector } from "/redux/user/selectors"
import { ReduxScreenProps } from "/utils/types"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state),
  loadState: userStateSelector(state)
})

export const withRedux = connect(mapStateToProps)

export type UserInfoReduxProps = ReduxScreenProps<typeof withRedux>
