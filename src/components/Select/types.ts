export interface SelectOption<T> {
  value: T
  label: string
}

export interface SelectProps<T> {
  height?: number
  width?: number
  data: Array<SelectOption<T>>
  value: SelectOption<T>["value"]
  onChange: (value: T) => void
}

export interface SelectState {
  showDropdown: boolean
  y?: number
}

export interface OptionProps<T> extends SelectOption<T> {
  selected: boolean
  first?: boolean
  last?: boolean
  onPress?: (value: T) => void
}
