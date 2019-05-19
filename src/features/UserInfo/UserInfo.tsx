import React from "react"
import { ActivityIndicator } from "react-native"
import { compose } from "redux"
import { get } from "ts-get"

import { Card, Text } from "/components"
import { color } from "/configs"
import { lang } from "/languages"
import { translate } from "/languages/translate"
import { RoomType } from "/models/Room"
import { ReduxStateType } from "/redux/types"

import { UserInfoReduxProps, withRedux } from "./redux"

export interface Props extends UserInfoReduxProps {}

export interface State {}

class UserInfo extends React.PureComponent<Props, State> {
  renderLoading() {
    return (
      <Card>
        <ActivityIndicator />
      </Card>
    )
  }

  renderLoaded() {
    const { user } = this.props

    const roomNumber = get(user.room, (room) => room.id, "")
    const roomType = get(user.room, (room) => room.type, RoomType.NORMAL)

    return (
      <Card>
        <Text>{lang.sample.name(user.name)}</Text>
        <Text>{lang.sample.roomNumber(roomNumber)}</Text>
        <Text>{lang.sample.roomType(roomType)}</Text>
      </Card>
    )
  }

  renderError() {
    const { loadState } = this.props

    const errorMessage = get(loadState.error, (error) => error.message, "")

    return (
      <Card>
        <Text color={color.red}>{translate(errorMessage)}</Text>
      </Card>
    )
  }

  render() {
    const { loadState } = this.props

    switch (loadState.status) {
      case ReduxStateType.LOADING:
        return this.renderLoading()

      case ReduxStateType.LOADED:
        return this.renderLoaded()

      case ReduxStateType.ERROR:
        return this.renderError()

      default:
        return null
    }
  }
}

export default compose(withRedux)(UserInfo)
