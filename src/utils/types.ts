import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native"
import { InferableComponentEnhancerWithProps } from "react-redux"

export type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>

export type ReduxScreenProps<T> = T extends InferableComponentEnhancerWithProps<infer P, unknown>
  ? P
  : {}
