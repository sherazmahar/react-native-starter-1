import { StyleSheet } from "react-native"

import { color, fontSize, radius, spacing } from "/configs"

const BORDER_WIDTH = 1
const BORDER_RADIUS = radius.m

export default StyleSheet.create({
  container: {
    position: "relative"
  },
  wrapper: {
    marginTop: 2,
    justifyContent: "center"
  },
  select: {
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    borderColor: color.lightGray,
    backgroundColor: color.white,
    flexDirection: "row",
    alignItems: "center"
  },
  selectSelected: {
    borderColor: color.primary
  },
  selectIcon: {
    marginLeft: spacing.l
  },
  optionWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    marginHorizontal: BORDER_WIDTH, // To match with the select border
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: BORDER_RADIUS,
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: BORDER_RADIUS,
    zIndex: 999
  },
  label: {
    color: color.text,
    fontSize: fontSize.s
  },
  textEmpty: {
    color: color.lightGray,
    fontSize: fontSize.s
  },
  option: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m
  },
  optionFirst: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  },
  optionLast: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS
  },
  optionSelected: {
    backgroundColor: color.lighterGray
  }
})
