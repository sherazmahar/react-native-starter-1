import AsyncStorage from "@react-native-community/async-storage"
import { applyMiddleware, createStore } from "redux"
import { PersistConfig, persistReducer, persistStore } from "redux-persist"

import middlewares, { setupMiddleware } from "./middlewares"
import reducers from "./reducers"

const persistConfig: PersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

setupMiddleware()

export { store, persistor }
