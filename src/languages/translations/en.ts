import AppLanguage from "./type"

const en: AppLanguage = {
  error: {
    userNotFound: "User not found"
  },
  sample: {
    title: "Sample Page",
    name: name => `Name: ${name}`,
    roomNumber: number => `Room number: ${number}`,
    roomType: type => `Room type: ${type}`,
    getUserInfo: "Get user information"
  }
}

export default en
