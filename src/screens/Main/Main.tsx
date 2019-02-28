import React from "react"
import { Text, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import styles from "./styles"

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class Main extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
      </View>
    )
  }
}
