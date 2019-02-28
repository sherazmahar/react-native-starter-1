import { connect } from "react-redux"

import { nameSelector } from "@src/redux/selectors/userSelector"

import Main, { ReduxProps } from "./Main"

function mapStateToProps(state: any): ReduxProps {
  return {
    name: nameSelector(state)
  }
}

export default connect(
  mapStateToProps,
  null
)(Main)
