import { Room } from "@models"

export default interface User {
  id: string
  name: string
  room?: Room
}
