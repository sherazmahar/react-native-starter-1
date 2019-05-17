import React from "react"
import { View } from "react-native"

import { Text } from "/components"
import { lang } from "/languages"

import styles from "./styles"

export class EmptyOption extends React.PureComponent {
  render() {
    return (
      <View style={styles.option}>
        <Text style={styles.textEmpty}>{lang.common.empty}</Text>
      </View>
    )
  }
}
