import { RoomType } from "/models/Room"

const SampleData = {
  users: [
    {
      id: "scitbiz",
      name: "Hung Pham",
      room: {
        id: "P402",
        type: RoomType.VIP
      }
    },
    {
      id: "angelic",
      name: "Angelic Loveland",
      room: {
        id: "P307",
        type: RoomType.NORMAL
      }
    },
    {
      id: "lola",
      name: "Lola Hooper",
      room: {
        id: "P205",
        type: RoomType.VIP
      }
    },
    {
      id: "lucia",
      name: "Lucia Nystrom",
      room: {
        id: "P102",
        type: RoomType.VIP
      }
    }
  ]
}

export default SampleData
