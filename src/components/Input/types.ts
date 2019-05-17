import { TextInputProps as RNTextInputProps } from "react-native"

export interface TextInputProps extends RNTextInputProps {}

export interface TextInputState {
  isFocused: boolean
}
