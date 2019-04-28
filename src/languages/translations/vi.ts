import AppLanguage from "./type"

const VietnameseLanguage: AppLanguage = {
  error: {
    userNotFound: "User không tồn tại"
  },
  sample: {
    title: "Sample Page",
    name: name => `Tên: ${name}`,
    roomNumber: number => `Số phòng: ${number}`,
    roomType: type => `Loại phòng: ${type}`,
    getUserInfo: "Lấy thông tin người dùng"
  }
}

export default VietnameseLanguage
