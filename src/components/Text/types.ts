import { TextProperties, TextStyle } from "react-native"

import { TextPresetType } from "./presets"

export default interface TextProps extends TextProperties {
  /**
   * The text to display
   */
  children?: string | string[]

  /**
   * The text to display (if not using [TextProps.children])
   */
  text?: string

  /**
   * Text props (use with i18n-js format)
   */
  textProps?: object

  /**
   * An optional style override
   */
  style?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresetType
}
