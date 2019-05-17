import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import { Text } from "/components"

import { buttonTextTheme, buttonTheme } from "./styles"
import ButtonProps from "./types"

export default class Button extends React.PureComponent<ButtonProps> {
  public static defaultProps: ButtonProps = {
    activeOpacity: 0.6,
    preset: "primary",
    style: {}
  }

  render() {
    const { text, color, preset, style: styleOverride, children, ...rest } = this.props

    const buttonPreset = buttonTheme[preset]
    const textPreset = buttonTextTheme[preset]

    const flattenedStyleOverride = Array.isArray(styleOverride)
      ? StyleSheet.flatten(styleOverride)
      : styleOverride

    const style = [buttonPreset, flattenedStyleOverride]

    return (
      <TouchableOpacity {...rest} style={style}>
        {text ? <Text style={textPreset}>{text}</Text> : children}
      </TouchableOpacity>
    )
  }
}
