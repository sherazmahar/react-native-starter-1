import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"

import { TEXT_BASE as TEXT_COMPONENT_BASE } from "/components/Text/styles"
import { color, fontSize, radius, spacing } from "/configs"

const BUTTON_BASE: ViewStyle = {
  borderRadius: radius.m,
  paddingHorizontal: spacing.xxs,
  paddingVertical: spacing.m,
  justifyContent: "center",
  alignItems: "center"
}

export type ButtonPreset = "primary" | "flat"

type ButtonPresetTheme<T> = { [key in ButtonPreset]: StyleProp<T> }

export const buttonTheme: ButtonPresetTheme<ViewStyle> = StyleSheet.create({
  primary: { ...BUTTON_BASE, backgroundColor: color.primary },
  flat: { ...BUTTON_BASE, backgroundColor: color.transparent }
})

const TEXT_BASE: TextStyle = {
  ...TEXT_COMPONENT_BASE,
  fontSize: fontSize.m
}

export const buttonTextTheme: ButtonPresetTheme<TextStyle> = StyleSheet.create({
  primary: { ...TEXT_BASE, color: color.white },
  flat: { ...TEXT_BASE, color: color.primary, fontWeight: "bold" }
})
