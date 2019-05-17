import { assert } from "chai"

import { USER_NOT_FOUND } from "../src/apis/user/errors"
import { getInfo } from "../src/apis/user/info"

describe("api.user.info", () => {
  describe("getInfo()", () => {
    it("should throw USER_NOT_FOUND if there is no id passed in", async () => {
      try {
        await getInfo({})
      } catch (error) {
        assert.equal(error.message, USER_NOT_FOUND.message)
      }
    })
  })
})
