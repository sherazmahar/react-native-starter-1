export default interface AppLanguage {
  common: {
    empty: string
  }
  error: {
    userNotFound: string
    unauthorized: string
  }
  sample: {
    title: string
    name: (name: string) => string
    roomNumber: (roomNumber: string) => string
    roomType: (type: string) => string
    getUserInfo: string
    searchSomething: string
  }
}
