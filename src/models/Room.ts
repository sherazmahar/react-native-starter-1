export enum RoomType {
  NORMAL = "NORMAL",
  VIP = "VIP"
}

export interface Room {
  id: string
  type: RoomType
}
