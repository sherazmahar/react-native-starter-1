/**
 * A simple [Promise] timeout to give some delay
 *
 * @param ms The time to delay (in millisecond)
 */
export const wait = (ms: number = 1000) => new Promise((res) => setTimeout(res, ms))
