import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { AppState } from "@redux/reducers"
import { getUser } from "@redux/User/actions"
import { userSelector } from "@redux/User/selectors"

import Sample from "./Sample"

export function mapStateToProps(state: AppState) {
  return {
    user: userSelector(state)
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    userActions: bindActionCreators({ getUser }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample)
