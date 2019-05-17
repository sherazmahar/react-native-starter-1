import AppLanguage from "./type"

const en: AppLanguage = {
  common: {
    empty: "Empty"
  },
  error: {
    userNotFound: "User not found"
  },
  sample: {
    title: "Sample Page",
    name: (name) => `Name: ${name}`,
    roomNumber: (roomNumber) => `Room number: ${roomNumber}`,
    roomType: (type) => `Room type: ${type}`,
    getUserInfo: "Get user information",
    searchSomething: "Search something..."
  }
}

export default en
