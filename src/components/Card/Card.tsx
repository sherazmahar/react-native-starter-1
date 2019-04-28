import React from "react"
import { View, ViewStyle } from "react-native"

import { style as globalStyle } from "@configs"

import CardProps from "./types"

export default function Card(props: CardProps) {
  const { style: overrideStyle, children, ...rest } = props

  const style: ViewStyle[] = [globalStyle.card]
  if (Array.isArray(overrideStyle)) {
    style.push(...overrideStyle)
  } else {
    style.push(overrideStyle || {})
  }

  return (
    <View {...rest} style={style}>
      {children}
    </View>
  )
}
