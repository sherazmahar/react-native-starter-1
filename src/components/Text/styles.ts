import { StyleSheet } from "react-native"

import { color } from "/configs"

export const TEXT_BASE = {
  color: color.text,
  fontSize: 16
}

export default StyleSheet.create({
  text: {
    // You can set global font and style for text here
    color: color.text
  }
})
