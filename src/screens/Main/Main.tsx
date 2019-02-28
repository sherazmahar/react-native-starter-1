import React from "react"
import { Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import { Button } from "@components"
import { Routes } from "@src/navigators/Main"

import styles from "./styles"

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

export interface ReduxProps {
  name: string
}

export interface Props extends ReduxProps {
  navigation: NavigationScreenProp<any, any>
}

export interface State {}
