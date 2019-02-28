import React from "react"
import { Text, TextInput, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import { Button } from "@components"
import { Routes } from "@navigators/Main"
import { setName } from "@redux/actions/user"

import styles from "./styles"

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      name: ""
    }

    this._goToMain = this._goToMain.bind(this)
  }

  _goToMain() {
    const { name } = this.state

    this.props.userActions.setName(name)
    this.props.navigation.navigate(Routes.main)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <TextInput
          style={styles.nameTextInput}
          value={this.state.name}
          placeholder="Your Name"
          onChangeText={name => this.setState({ name })}
        />
        <Button text="Login" onPress={this._goToMain} />
      </View>
    )
  }
}

export interface ReduxActions {
  userActions: {
    setName: typeof setName
  }
}

export interface Props extends ReduxActions {
  navigation: NavigationScreenProp<any, any>
}

export interface State {
  name: string
}
