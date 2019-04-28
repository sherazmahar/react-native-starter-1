export enum RoomType {
  NORMAL = "NORMAL",
  VIP = "VIP"
}

export default interface Room {
  id: string
  type: RoomType
}
