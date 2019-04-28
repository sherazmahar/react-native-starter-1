import { wait } from "@apis/functions"
import { ApiResponse } from "@apis/types"
import { User } from "@models"
import SampleData from "@utils/SampleData"

import UserError from "./errors"
import { GetUserInfoParams } from "./types"

export async function getInfo(params: GetUserInfoParams): Promise<ApiResponse<User>> {
  try {
    // Give a little delay to look like the real api request
    await wait(1000)

    const user = SampleData.users.find(user => user.id === params.id)

    if (!user) {
      throw UserError.USER_NOT_FOUND
    }

    return { data: user }
  } catch (error) {
    return { error }
  }
}
