import React from "react"
import { ActivityIndicator, View } from "react-native"

import { Card, Text } from "@components"
import { lang } from "@languages"
import { translate } from "@languages/translate"
import { Room } from "@models"

import { UserInfoProps } from "./types"

export default class UserInfo extends React.PureComponent<UserInfoProps> {
  renderRoomInformation(room?: Room): React.ReactNode {
    if (room) {
      return (
        <React.Fragment>
          <Text>{lang.sample.roomNumber(room.id)}</Text>
          <Text>{lang.sample.roomType(room.type)}</Text>
        </React.Fragment>
      )
    }

    return null
  }

  render() {
    const { user, userLoadState } = this.props

    if (userLoadState.isLoading) {
      return (
        <Card>
          <ActivityIndicator />
        </Card>
      )
    }

    if (userLoadState.error) {
      return (
        <Card>
          <Text>{translate(userLoadState.error.message)}</Text>
        </Card>
      )
    }

    return (
      <Card>
        <Text preset="bold">{lang.sample.name(user.name)}</Text>
        {this.renderRoomInformation(user.room)}
      </Card>
    )
  }
}
