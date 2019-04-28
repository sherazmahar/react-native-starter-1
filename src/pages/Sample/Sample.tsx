import React from "react"
import { Text, View } from "react-native"
import Button from "@components/Button"
import { SampleReduxProps } from "./index"
import { SampleProps, SampleState } from "./types"
import styles from "./styles"

type Props = SampleProps & SampleReduxProps

type State = SampleState

export default class Sample extends React.PureComponent<Props, State> {
  render() {
    const { user } = this.props

    return (
      <View style={styles.container}>
        <Text>Name: {user.name}</Text>
        <Button text="Get User" onPress={this.props.userActions.getUser} />
      </View>
    )
  }
}
