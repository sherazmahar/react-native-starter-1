import { StyleSheet } from "react-native"

import color from "./color"
import radius from "./radius"

export default StyleSheet.create({
  shadow: {
    elevation: 3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: radius.m,
    shadowColor: color.black,
    shadowOpacity: 0.1
  },
  expand: {
    flex: 1
  },
  centerRow: {
    flexDirection: "row",
    alignItems: "center"
  }
})
