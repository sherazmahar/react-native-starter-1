import { StyleProp, TextProps as RNTextProps, TextStyle } from "react-native"

export default interface TextProps extends RNTextProps {
  /**
   * An optional style override
   */
  style: StyleProp<TextStyle>

  /**
   * The color to apply
   */
  color: string
}
