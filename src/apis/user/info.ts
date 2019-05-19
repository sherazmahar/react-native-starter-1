import { wait } from "/apis/functions"
import { User } from "/models"
import SampleData from "/utils/SampleData"

import { USER_NOT_FOUND } from "./errors"
import { GetUserInfoParams } from "./types"

/**
 * Get the user's information from [SampleData.users]
 *
 * @param params The query params
 *
 * @returns The user that match the query
 *
 * @throws [USER_NOT_FOUND] if no user match
 * @throws other error
 */
export const getInfo = async (params: GetUserInfoParams): Promise<User> => {
  // Give a little delay to look like the real api request
  await wait()

  const user = SampleData.users.find((user) => user.id === params.id)

  if (!user) {
    throw USER_NOT_FOUND
  }

  return user
}
