import { connect } from "react-redux"

import { nameSelector } from "@src/redux/selectors/userSelector"

import Main from "./Main"

const mapStateToProps = (state: any) => ({
  name: nameSelector(state)
})

export default connect(
  mapStateToProps,
  null
)(Main)
