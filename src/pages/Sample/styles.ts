import { StyleSheet } from "react-native"

import { color, spacing } from "@configs"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    justifyContent: "center"
  },
  button: {
    margin: spacing.m
  }
})
