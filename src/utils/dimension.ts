import { Dimensions } from "react-native"

export const getDimensions = () => Dimensions.get("window")

export const getScreenWidth = (percent = 1) => getDimensions().width * percent

export const getScreenHeight = (percent = 1) => getDimensions().height * percent
