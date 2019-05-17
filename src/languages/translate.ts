import i18n, { TranslateOptions } from "i18n-js"

/**
 * Translates text.
 *
 * @param key The i18n key
 * @param options Translate options
 */
export const translate = (key: string, options?: TranslateOptions) => {
  return key ? i18n.t(key, options) : key
}
