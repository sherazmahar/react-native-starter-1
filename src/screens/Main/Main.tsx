import React from "react"
import { Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import { Button } from "@components"
import { Routes } from "@src/navigators/Main"

import styles from "./styles"

export interface Props {
  navigation: NavigationScreenProp<any, any>
  name: string
}

export interface State {}

export default class Main extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
        <Text>Welcome back, {this.props.name}!</Text>
        <Button text="Logout" onPress={() => this.props.navigation.navigate(Routes.login)} />
      </View>
    )
  }
}
