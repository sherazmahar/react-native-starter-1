import React from "react"
import { ActivityIndicator, Image } from "react-native"
import { compose } from "redux"
import { get } from "ts-get"

import { ICON_VIP } from "/assets/images"
import { Card, Text } from "/components"
import { color } from "/configs"
import { lang } from "/languages"
import { translate } from "/languages/translate"
import { User } from "/models"
import { RoomType } from "/models/Room"
import { ReduxStateType } from "/redux/types"
import SampleData from "/utils/SampleData"

import { UserInfoReduxProps, withRedux } from "./redux"
import styles from "./styles"

export interface Props extends UserInfoReduxProps {}

export interface State {}

class UserInfo extends React.Component<Props, State> {
  renderLoading() {
    return (
      <Card>
        <ActivityIndicator />
      </Card>
    )
  }

  renderLoaded(user: User) {
    const roomNumber = get(user.room, (room) => room.id, "")
    const roomType = get(user.room, (room) => room.type, RoomType.NORMAL)

    const VIPIcon = roomType === RoomType.VIP && (
      <Image resizeMode="contain" style={styles.vipIcon} source={ICON_VIP} />
    )

    return (
      <Card>
        <Text typography="bold">{lang.sample.name(user.name)}</Text>
        <Text>{lang.sample.roomNumber(roomNumber)}</Text>
        <Text trailing={VIPIcon}>{lang.sample.roomType(roomType)}</Text>
      </Card>
    )
  }

  renderError(e?: Error) {
    const errorMessage = get(e, (error) => error.message, "")
    const hintNames = SampleData.users.map((user) => user.id)

    return (
      <Card>
        <Text color={color.red}>{translate(errorMessage)}</Text>
        <Text>{lang.sample.searchHint(hintNames.join(", "))}</Text>
      </Card>
    )
  }

  render() {
    const { loadState, user } = this.props

    switch (loadState.status) {
      case ReduxStateType.LOADING:
        return this.renderLoading()

      case ReduxStateType.LOADED:
        return this.renderLoaded(user)

      case ReduxStateType.ERROR:
        return this.renderError(loadState.error)

      default:
        return null
    }
  }
}

export default compose(withRedux)(UserInfo)
