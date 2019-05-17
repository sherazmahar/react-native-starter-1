import { StyleSheet } from "react-native"

import { color, radius, spacing, style } from "/configs"

export default StyleSheet.create({
  container: {
    ...style.shadow,
    backgroundColor: color.white,
    borderRadius: radius.m,
    padding: spacing.m
  }
})
