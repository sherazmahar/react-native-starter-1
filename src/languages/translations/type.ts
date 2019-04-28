export default interface AppLanguage {
  error: {
    userNotFound: string
  }
  sample: {
    title: string
    name: (name: string) => string
    roomNumber: (number: string) => string
    roomType: (type: string) => string
    getUserInfo: string
  }
}
