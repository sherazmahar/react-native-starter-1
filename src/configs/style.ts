import { StyleSheet } from "react-native"

import { color, radius, spacing } from "@configs"

export default StyleSheet.create({
  card: {
    backgroundColor: color.white,
    padding: spacing.m,
    margin: spacing.m,
    borderRadius: radius.m,
    elevation: 2,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: radius.m
  }
})
