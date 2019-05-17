import { createSwitchNavigator } from "react-navigation"

import { Sample } from "/screens"

export enum Routes {
  SAMPLE = "Sample"
}

export default createSwitchNavigator({
  [Routes.SAMPLE]: Sample
})
