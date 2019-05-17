const colors = {
  lighterGray: "#EEEEEE",
  lightGray: "#E5E5E5",
  gray: "#C4C4C4",
  darkGray: "#878787",
  red: "#F77062",
  darkRed: "#b71c1c",
  transparent: "rgba(0,0,0,0)",
  cyan: "#16BECF",
  blue: "#2196f3",
  yellow: "#FFC61B",
  orange: "#ff9800",
  green: "#4caf50",
  brown: "#795548",
  white: "#FFFFFF",
  darkWhite: "#F9FAFB",
  black: "#000000"
}

export default {
  primary: colors.blue,
  background: colors.darkWhite,
  border: colors.lighterGray,
  text: colors.darkGray,
  error: colors.red,
  shadow: colors.black,
  ...colors
}
