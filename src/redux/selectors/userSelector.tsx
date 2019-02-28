import { User } from "@models"

import { USER } from "../constants"

export const nameSelector = (state: { [USER]: User }) => state[USER].name
