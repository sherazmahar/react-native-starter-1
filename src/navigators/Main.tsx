import { createSwitchNavigator } from "react-navigation"
import { Login, Main } from "@screens"

export const Routes = {
  login: "Login",
  main: "Main"
}

export default createSwitchNavigator({
  [Routes.login]: Login,
  [Routes.main]: Main
})
