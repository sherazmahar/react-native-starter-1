import React from "react"
import { View } from "react-native"
import { compose } from "redux"

import { Button, Input, Space } from "/components"
import { lang } from "/languages"
import { UserInfo } from "/modules"

import { SampleReduxProps, withRedux } from "./redux"
import styles from "./styles"

export interface Props extends SampleReduxProps {}

export interface State {
  id?: string
}

class Sample extends React.PureComponent<Props, State> {
  state: State = {
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
          placeholder={lang.sample.searchSomething}
          autoCapitalize="none"
          onChangeText={this.onChangeId}
        />
        <Space height="m" />
        <Button preset="primary" text={lang.sample.getUserInfo} onPress={this.getUser} />
      </View>
    )
  }
}

export default compose(withRedux)(Sample)
