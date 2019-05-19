import AppLanguage from "../types"

export const vi: AppLanguage = {
  common: {
    empty: "Trống"
  },
  error: {
    userNotFound: "User không tồn tại",
    unauthorized: "Không thể xác thực tài khoản"
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
