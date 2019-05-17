import AppLanguage from "./type"

const VietnameseLanguage: AppLanguage = {
  common: {
    empty: "Trống"
  },
  error: {
    userNotFound: "User không tồn tại"
  },
  sample: {
    title: "Sample Page",
    name: (name) => `Tên: ${name}`,
    roomNumber: (roomNumber) => `Số phòng: ${roomNumber}`,
    roomType: (type) => `Loại phòng: ${type}`,
    getUserInfo: "Lấy thông tin người dùng",
    searchSomething: "Tìm kiếm..."
  }
}

export default VietnameseLanguage
