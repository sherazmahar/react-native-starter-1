import { Room } from "@models"

export default interface User {
  name: string
  room?: Room
}
