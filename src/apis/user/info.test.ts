import { assert } from "chai"

import { USER_NOT_FOUND } from "./errors"
import { getInfo } from "./info"

describe("api.user.info", () => {
  describe("getInfo()", () => {
    it("should throw USER_NOT_FOUND if there is no id passed in", async () => {
      try {
        await getInfo({})
      } catch (error) {
        assert.equal(error.message, USER_NOT_FOUND.message)
      }
    })

    it("should give the correct user information", async () => {
      const user = await getInfo({ id: "scitbiz" })

      assert.equal(user.name, "Hung Pham")
      assert.isNotNull(user.room)
      assert.equal(user.room!.id, "P402")
      assert.equal(user.room!.type, "VIP")
    })
  })
})
