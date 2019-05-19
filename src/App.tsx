import "/languages/i18n"

import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import AppNavigator from "/navigators"
import { persistor, store } from "/redux/store"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
