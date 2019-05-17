import React from "react"
import {
  FlatList,
  LayoutChangeEvent,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

import { EmptyOption } from "/components/Select/EmptyOption"
import { color } from "/configs"

import Option from "./Option"
import styles from "./styles"
import { SelectOption, SelectProps, SelectState } from "./types"

class Dropdown<T> extends React.PureComponent<SelectProps<T>, SelectState> {
  select = React.createRef<TouchableOpacity>()

  constructor(props: SelectProps<T>) {
    super(props)

    this.state = {
      showDropdown: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSelectPress = this.onSelectPress.bind(this)

    this.renderOption = this.renderOption.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.renderDropdown = this.renderDropdown.bind(this)
  }

  onLayout(event: LayoutChangeEvent) {
    const { layout } = event.nativeEvent

    this.setState({ y: layout.height })
  }

  onSelectPress() {
    const { showDropdown } = this.state

    this.setState({ showDropdown: !showDropdown })
  }

  onChange(value: T) {
    const { showDropdown } = this.state

    this.setState({ showDropdown: !showDropdown })
    this.props.onChange(value)
  }

  keyExtractor(item: SelectOption<T>, index: number) {
    return `${item.value || index}`
  }

  renderOption(info: ListRenderItemInfo<SelectOption<T>>) {
    const { item, index } = info
    const { value: selectedItem, data } = this.props

    return (
      <Option
        {...item}
        selected={selectedItem === item.value}
        first={index === 0}
        last={index === data.length - 1}
        onPress={this.onChange}
      />
    )
  }

  renderSelect() {
    const { value, data } = this.props
    const { showDropdown } = this.state

    const selectedItem = data.find((item) => item.value === value)
    const label = selectedItem ? selectedItem.label : ""
    const icon = showDropdown ? "chevron-up" : "chevron-down"

    return (
      <TouchableOpacity
        ref={this.select}
        style={[styles.select, showDropdown && styles.selectSelected]}
        onPress={this.onSelectPress}
        onLayout={this.onLayout}
      >
        <Text>{label}</Text>
        <Icon name={icon} color={color.lightGray} style={styles.selectIcon} />
      </TouchableOpacity>
    )
  }

  renderDropdown() {
    const { height, data } = this.props
    const { y, showDropdown } = this.state

    if (!showDropdown) {
      return null
    }

    const position = { top: y, height }

    return (
      <View style={[styles.optionWrapper, position]}>
        <FlatList
          contentContainerStyle={styles.wrapper}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyOption />}
          data={data}
          renderItem={this.renderOption}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelect()}
        {this.renderDropdown()}
      </View>
    )
  }
}

export default Dropdown
