import React from "react"
import { TouchableOpacity } from "react-native"

import { Text } from "/components"

import styles from "./styles"
import { OptionProps } from "./types"

export default class Option<T> extends React.PureComponent<OptionProps<T>> {
  onPress() {
    const { onPress, value } = this.props

    if (onPress) {
      onPress(value)
    }
  }

  render() {
    const { label, selected, first, last } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.option,
          selected && styles.optionSelected,
          selected && first && styles.optionFirst,
          selected && last && styles.optionLast
        ]}
        onPress={this.onPress}
      >
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}
