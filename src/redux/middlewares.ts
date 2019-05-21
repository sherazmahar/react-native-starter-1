import { applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import rootSaga from "/redux/sagas"

import { loggerOptions, sagaOptions } from "./options"

const sagaMiddleware = createSagaMiddleware(sagaOptions)

/**
 * Setup and return all middlewares needed for the development
 */
const getDevMiddlewares = () => {
  if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`)

    const logger = createLogger(loggerOptions)

    return [logger]
  }

  return []
}

/**
 * Setup middlewares
 *
 * This must be run after the [redux#applyMiddleware] function
 */
export const setupMiddleware = () => {
  sagaMiddleware.run(rootSaga)
}

const middlewares = [sagaMiddleware, ...getDevMiddlewares()]

export default middlewares
