import React from "react"
import { StyleSheet, Text as RNText } from "react-native"

import { color } from "/configs"

import styles from "./styles"
import TextProps from "./types"

export default class Text extends React.PureComponent<TextProps> {
  public static defaultProps: TextProps = {
    style: {},
    color: color.text
  }

  render() {
    const { children, style: styleOverride, color, ...rest } = this.props

    const style = StyleSheet.flatten([styles.text, { color }, styleOverride])

    return (
      <RNText {...rest} style={style}>
        {children}
      </RNText>
    )
  }
}
