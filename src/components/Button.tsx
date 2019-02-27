import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface Props {
  text: String;
  onPress?: (event: GestureResponderEvent) => void;
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}
