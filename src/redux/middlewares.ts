import createSagaMiddleware from "redux-saga"

import rootSaga from "/redux/sagas"

function getDevMiddlewares() {
  if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`)
    const logger = createLogger()

    return [logger]
  }

  return []
}

export const sagaMiddleware = createSagaMiddleware()

const middlewares = [...getDevMiddlewares(), sagaMiddleware]

export default middlewares

/**
 * Setup middlewares
 *
 * This must be run after the applyMiddleware() function
 */
export function setupMiddleware() {
  sagaMiddleware.run(rootSaga)
}
