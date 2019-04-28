import { ViewProps, ViewStyle } from "react-native"

export default interface CardProps extends ViewProps {
  /**
   * React chidlren
   */
  children?: React.ReactNode

  /**
   * Style to override
   */
  style?: ViewStyle | ViewStyle[]
}
