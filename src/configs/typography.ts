import { Platform } from "react-native"

export default {
  primary: Platform.select({ ios: "Roboto", android: "Roboto" }),
  secondary: Platform.select({ ios: "Roboto", android: "Roboto" })
}
