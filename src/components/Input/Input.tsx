import React from "react"
import { TextInput as RNTextInput } from "react-native"

import { InputEvent } from "/utils/types"

import styles from "./styles"
import { TextInputProps as Props, TextInputState as State } from "./types"

export default class Input extends React.PureComponent<Props, State> {
  state = {
    isFocused: false
  }

  onFocus = (e: InputEvent) => {
    const { onFocus } = this.props

    this.setState({ isFocused: true })

    if (onFocus) {
      onFocus(e)
    }
  }

  onBlur = (e: InputEvent) => {
    const { onBlur } = this.props

    this.setState({ isFocused: false })

    if (onBlur) {
      onBlur(e)
    }
  }

  render() {
    const { style, ...rest } = this.props
    const { isFocused } = this.state

    return (
      <RNTextInput
        {...rest}
        style={[styles.container, style, isFocused && styles.focused]}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}
