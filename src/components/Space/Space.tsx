import React from "react"
import { View } from "react-native"

import spacing, { SpacingKey } from "/configs/spacing"

import { SpaceProps } from "./types"

const isSpacingKey = (value: string | number): value is SpacingKey => !!value

export default class Space extends React.PureComponent<SpaceProps> {
  static defaultProps: SpaceProps = {
    width: 0,
    height: 0,
    value: 0
  }

  render() {
    const { value } = this.props
    let { width, height } = this.props

    if (value) {
      width = value
      height = value
    }

    if (isSpacingKey(width)) {
      width = spacing[width]
    }

    if (isSpacingKey(height)) {
      height = spacing[height]
    }

    return <View style={{ width, height }} />
  }
}
