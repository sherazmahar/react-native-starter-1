import { createPayloadAction } from "@utils/redux"

import { LoadStateAction, LoadStateActionTypes } from "./types"

// Redux actions
export const setUserLoadState = createPayloadAction<LoadStateAction>(LoadStateActionTypes.SET_USER_LOAD_STATE)
