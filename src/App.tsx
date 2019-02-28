import React from "react"
import { Provider } from "react-redux"

import AppNavigator from "@navigators"
import store from "@redux/stores"

interface Props {}

export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
