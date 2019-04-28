import { TextStyle } from "react-native"

import { color, typography } from "@configs"

const BASE: TextStyle = {
  // fontFamily: typography.primary,
  color: color.text,
  fontSize: 15
}

const TextPresets = {
  default: BASE,
  bold: { ...BASE, fontWeight: "bold" } as TextStyle
}

export type TextPresetType = keyof typeof TextPresets

export default TextPresets
