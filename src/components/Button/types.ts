import { TouchableOpacityProps } from "react-native"

import { buttonTheme } from "./styles"

export default interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to display
   */
  text?: string

  /**
   * React children (usually <Text>)
   */
  children?: React.ReactElement

  /**
   * The color for the button
   */
  color?: string

  /**
   * Button preset
   */
  preset: keyof typeof buttonTheme
}
