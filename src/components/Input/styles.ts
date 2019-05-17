import { StyleSheet } from "react-native"

import { color, radius, spacing } from "/configs"

const BORDER_WIDTH = 1
const BORDER_RADIUS = radius.m

export default StyleSheet.create({
  container: {
    minHeight: 0,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.m,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    borderColor: color.lightGray,
    backgroundColor: color.white,
    color: color.text
  },
  focused: {
    borderColor: color.primary
  }
})
