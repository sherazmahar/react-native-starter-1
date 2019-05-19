export const UNAUTHORIZED = new Error("error.unauthorized")

export const commonErrors: { [key: number]: Error } = {
  401: UNAUTHORIZED
}
