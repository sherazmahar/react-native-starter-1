import axios from "axios"
import { BASE_URL } from "react-native-dotenv"
import get from "ts-get"

import { commonErrors } from "./errors"

const Request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
  // ... other configs
})

Request.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    const errorCode: number = get(error, (error) => error.response.status, 0)

    if (errorCode && commonErrors.hasOwnProperty(errorCode)) {
      return Promise.reject(commonErrors[errorCode])
    }

    return Promise.reject(error)
  }
)

export default Request
