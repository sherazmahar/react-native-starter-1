import AsyncStorage from "@react-native-community/async-storage"
import { ReduxLoggerOptions } from "redux-logger"
import { PersistConfig } from "redux-persist"
import { SagaMiddlewareOptions } from "redux-saga"

export const loggerOptions: ReduxLoggerOptions = {
  collapsed: true,
  duration: true,
  timestamp: true
}

export const sagaOptions: SagaMiddlewareOptions = {}

export const persistOptions: PersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: []
}
