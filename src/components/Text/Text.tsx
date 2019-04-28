import React from "react"
import { Text as RNText, TextStyle } from "react-native"

import presets from "./presets"
import TextProps from "./types"

export default function Text(props: TextProps) {
  const { preset = "default", textProps = {}, children, text, style: styleOverride, ...rest } = props

  // assemble the style
  const style: TextStyle[] = [presets[preset] || presets.default]
  if (Array.isArray(styleOverride)) {
    style.push(...styleOverride)
  } else {
    style.push(styleOverride || {})
  }

  return (
    <RNText {...rest} style={style}>
      {children || text}
    </RNText>
  )
}
