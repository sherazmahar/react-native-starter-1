import { applyMiddleware, createStore } from "redux"

import middlewares, { setupMiddleware } from "./middlewares"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(...middlewares))

setupMiddleware()

export default store
