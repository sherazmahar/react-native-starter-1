import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

import reducers from "@redux/reducers"

// Setup middlewares
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`)
  const loggerMiddleware = createLogger()

  middlewares.push(loggerMiddleware)
}

// Create store
const store = createStore(reducers, applyMiddleware(...middlewares))

export default store
