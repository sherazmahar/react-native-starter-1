import { createSwitchNavigator } from "react-navigation"

import { Sample } from "/screens"

import { Routes } from "./routes"

export default createSwitchNavigator({
  [Routes.SAMPLE]: Sample
})
