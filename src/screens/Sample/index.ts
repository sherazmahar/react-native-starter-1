import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { AppState } from "/redux/reducers"
import { fetchUser } from "/redux/user/actions"
import { userSelector } from "/redux/user/selectors"

import Sample from "./Sample"

export const mapStateToProps = (state: AppState) => ({
  user: userSelector(state)
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  userActions: bindActionCreators(
    {
      fetchUser: fetchUser.request
    },
    dispatch
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample)
