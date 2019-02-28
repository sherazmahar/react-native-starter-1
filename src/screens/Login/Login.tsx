import React from "react"
import { Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import { Button } from "@components"
import { Routes } from "@navigators/Main"

import styles from "./styles"

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {}

export default class Login extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <Button text="Go To Main" onPress={() => this.props.navigation.navigate(Routes.main)} />
      </View>
    )
  }
}
