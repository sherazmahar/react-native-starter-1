import createSagaMiddleware from "redux-saga"

import rootSaga from "/redux/sagas"

const getDevMiddlewares = () => {
  if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`)
    const logger = createLogger({
      collapsed: true,
      duration: true,
      timestamp: true
    })

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
export const setupMiddleware = () => {
  sagaMiddleware.run(rootSaga)
}
