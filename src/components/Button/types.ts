import { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"

import { TextPresetType } from "@components/Text/presets"

import { ButtonPresetType } from "./presets"

export default interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to display
   */
  text: string | string[]

  /**
   * Text props (use with i18n-js format)
   */
  textProps?: object

  /**
   * An optional style override for text
   */
  textStyle?: TextStyle

  /**
   * An optional style override
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * One of the different types of button presets.
   */
  preset?: ButtonPresetType

  /**
   * One of the different types of text presets.
   */
  textPreset?: TextPresetType
}
