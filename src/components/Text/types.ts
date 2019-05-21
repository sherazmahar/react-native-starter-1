import { StyleProp, TextProps as RNTextProps, TextStyle } from "react-native"

import { typography } from "/configs"

export default interface TextProps extends RNTextProps {
  /**
   * An optional style override
   */
  style: StyleProp<TextStyle>

  /**
   * The color to apply
   */
  color: string

  /**
   * The typography
   */
  typography: keyof typeof typography

  /**
   * The leading component to put on the left of the text
   */
  leading?: React.ReactNode

  /**
   * The trailing component to put on the right of the text
   */
  trailing?: React.ReactNode
}
