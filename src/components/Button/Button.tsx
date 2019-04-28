import React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"

import { Text } from "@components"

import presets, { ButtonTextPresets } from "./presets"
import ButtonProps from "./types"

export default function Button(props: ButtonProps) {
  const { preset = "default", textProps = {}, style: styleOverride, text, textPreset, textStyle, ...rest } = props

  // assemble the style
  const style: ViewStyle[] = [presets[preset] || presets.default]
  if (Array.isArray(styleOverride)) {
    style.push(...styleOverride)
  } else {
    style.push(styleOverride || {})
  }

  return (
    <TouchableOpacity {...rest} style={style}>
      <Text preset={textPreset} textProps={textProps} style={[ButtonTextPresets.default, textStyle || {}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
