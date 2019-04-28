import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { AppState } from "@redux/reducers"
import { getUser } from "@redux/user/actions"
import { userSelector } from "@redux/user/selectors"

import Sample from "./Sample"

function mapStateToProps(state: AppState) {
  return {
    user: userSelector(state)
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    userActions: bindActionCreators({ getUser }, dispatch)
  }
}

export type SampleReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample)
