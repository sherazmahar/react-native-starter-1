import { applyMiddleware, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"

import { persistOptions } from "/redux/options"

import middlewares, { setupMiddleware } from "./middlewares"
import reducers from "./reducers"

const persistedReducer = persistReducer(persistOptions, reducers)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

setupMiddleware()

export { store, persistor }
