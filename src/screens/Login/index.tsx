import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { setName } from "@redux/actions/user"

import Login, { Actions } from "./Login"

function mapDispatchToProps(dispatch: Dispatch): Actions {
  return {
    userActions: bindActionCreators({ setName }, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
