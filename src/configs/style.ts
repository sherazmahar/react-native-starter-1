import { StyleSheet } from "react-native"

import { color, radius } from "/configs"

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
