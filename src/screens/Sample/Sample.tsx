import React from "react"
import { TextInput, View } from "react-native"

import { Button, Card } from "@components"
import { lang } from "@languages"
import { UserInfo } from "@modules"

import styles from "./styles"
import { SamplePageProps, SamplePageState } from "./types"

export default class Sample extends React.PureComponent<SamplePageProps, SamplePageState> {
  state: SamplePageState = {
    id: ""
  }

  render() {
    const { userActions } = this.props
    const { id } = this.state

    return (
      <View style={styles.container}>
        <UserInfo />
        <Card>
          <TextInput
            style={{
              backgroundColor: "white",
              borderRadius: 10
            }}
            placeholder="Insert any user id (eg: scitbiz)"
            autoCapitalize="none"
            onChangeText={id => this.setState({ id })}
          />
        </Card>
        <Button style={styles.button} text={lang.sample.getUserInfo} onPress={() => userActions.getUser({ id })} />
      </View>
    )
  }
}
