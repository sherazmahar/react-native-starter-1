import { StyleSheet } from "react-native"

import { color, style, typography } from "/configs"

export const TEXT_BASE = {
  fontFamily: typography.normal,
  color: color.text,
  fontSize: 16
}

export default StyleSheet.create({
  container: style.centerRow,
  text: TEXT_BASE
})
