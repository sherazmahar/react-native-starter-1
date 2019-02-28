import React from "react"
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native"

import { Colors, Spaces } from "@configs/styles"

interface Props {
  text: String
  onPress?: (event: GestureResponderEvent) => void
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { text, onPress } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.MAIN,
    padding: Spaces.PADDING,
    margin: Spaces.PADDING,
    borderRadius: Spaces.RADIUS
  },
  text: {
    color: Colors.TEXT,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})
