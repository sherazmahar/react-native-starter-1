import React from "react"
import { View } from "react-native"

import { Button, Input, Space } from "/components"
import { UserInfo } from "/features"
import { lang } from "/languages"

import styles from "./styles"
import { SamplePageProps as Props, SamplePageState as State } from "./types"

export default class Sample extends React.PureComponent<Props, State> {
  state = {
    id: ""
  }

  constructor(props: Props) {
    super(props)

    this.onChangeId = this.onChangeId.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  onChangeId(id: string) {
    this.setState({ id })
  }

  getUser() {
    const { userActions } = this.props
    const { id } = this.state

    userActions.fetchUser({ id })
  }

  render() {
    return (
      <View key="" style={styles.container}>
        <UserInfo />
        <Space height="m" />
        <Input
          placeholder="Insert any user id (ex: scitbiz)"
          autoCapitalize="none"
          onChangeText={this.onChangeId}
        />
        <Space height="m" />
        <Button preset="primary" text={lang.sample.getUserInfo} onPress={this.getUser} />
      </View>
    )
  }
}
