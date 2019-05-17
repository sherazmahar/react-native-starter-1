import { Dimensions, PixelRatio } from "react-native"

/**
 * Get current window dimensions
 *
 * @returns The dimensions
 */
export const getDimensions = () => Dimensions.get("window")

/**
 * Converts provided width percentage to independent pixel (dp).
 *
 * @param percent The percentage of screen's width (from 0.0 to 1.0)
 *
 * @returns The calculated dp depending on current device's screen width.
 */
export const getScreenWidth = (percent = 1) =>
  PixelRatio.roundToNearestPixel(getDimensions().width * percent)

/**
 * Converts provided height percentage to independent pixel (dp).
 *
 * @param percent The percentage of screen's width (from 0.0 to 1.0)
 *
 * @returns The calculated dp depending on current device's screen height.
 */
export const getScreenHeight = (percent = 1) =>
  PixelRatio.roundToNearestPixel(getDimensions().height * percent)
