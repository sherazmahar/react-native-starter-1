import { TextStyle, ViewStyle } from "react-native"

import { color, spacing } from "@configs"

const BASE: ViewStyle = {
  backgroundColor: color.primary,
  padding: spacing.m,
  borderRadius: spacing.m,
  justifyContent: "center",
  alignItems: "center"
}

const TEXT_BASE: TextStyle = {
  color: color.white,
  fontSize: 12,
  fontWeight: "bold",
  textTransform: "uppercase"
}

const ButtonPresets: { [key: string]: ViewStyle } = {
  default: BASE
}

export const ButtonTextPresets: { [key: string]: TextStyle } = {
  default: TEXT_BASE
}

export type ButtonPresetType = keyof typeof ButtonPresets

export default ButtonPresets
