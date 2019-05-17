import "/languages/i18n"

import React from "react"
import { Provider } from "react-redux"

import AppNavigator from "/navigators"
import store from "/redux/store"

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
