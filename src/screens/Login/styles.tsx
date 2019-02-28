import { StyleSheet } from "react-native"

import { Colors, Spaces } from "@configs/styles"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: "center",
    alignItems: "center"
  },
  nameTextInput: {
    alignSelf: "stretch",
    padding: Spaces.PADDING,
    margin: Spaces.MARGIN,
    borderRadius: 10,
    borderWidth: 1
  }
})
