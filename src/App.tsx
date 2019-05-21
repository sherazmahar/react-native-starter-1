import "/languages/i18n"

import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import AppNavigator from "/navigators"
import { persistor, store } from "/redux/store"

// const AppNavigator = () => <View style={{ flex: 1, backgroundColor: "red" }} />

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
