import React from "react"
import { StyleSheet, Text as RNText, View } from "react-native"

import { color, typography } from "/configs"

import styles from "./styles"
import TextProps from "./types"

export default class Text extends React.PureComponent<TextProps> {
  public static defaultProps: TextProps = {
    typography: "normal",
    style: {},
    color: color.text
  }

  render() {
    const {
      children,
      style: styleOverride,
      color,
      leading,
      trailing,
      typography: typographyKey,
      ...rest
    } = this.props

    const style = StyleSheet.flatten([
      styles.text,
      { color, fontFamily: typography[typographyKey] },
      styleOverride
    ])

    const text = (
      <RNText {...rest} style={style}>
        {children}
      </RNText>
    )

    if (leading || trailing) {
      return (
        <View style={styles.container}>
          {leading}
          {text}
          {trailing}
        </View>
      )
    }

    return text
  }
}
