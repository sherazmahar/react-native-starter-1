import React from "react"
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native"

import { Colors, Spaces } from "@configs/styles"

interface Props {
  text: String
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: (event?: GestureResponderEvent) => void
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { style, text, textStyle, onPress } = this.props

    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.MAIN,
    padding: Spaces.PADDING,
    borderRadius: Spaces.RADIUS,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: Colors.TEXT,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})
