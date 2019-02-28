import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { setName } from "@redux/actions/user"

import Login, { ReduxActions } from "./Login"

function mapDispatchToProps(dispatch: Dispatch): ReduxActions {
  return {
    userActions: bindActionCreators({ setName }, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
