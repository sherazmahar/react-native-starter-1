const colors = {
  lighterGray: "#EEEEEE",
  lightGray: "#E5E5E5",
  gray: "#C4C4C4",
  darkGray: "#878787",
  red: "#F77062",
  transparent: "rgba(0,0,0,0)",
  cyan: "#16BECF",
  yellow: "#FFC61B",
  white: "#FFFFFF",
  darkWhite: "#F9FAFB",
  black: "#000000"
}

export default {
  primary: colors.red,
  background: colors.darkWhite,
  border: colors.lighterGray,
  text: colors.darkGray,
  error: colors.red,
  shadow: colors.black,
  ...colors
}
