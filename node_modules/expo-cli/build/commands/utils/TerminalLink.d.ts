/**
 * When linking isn't available, fallback to displaying the URL beside the
 * text in parentheses.
 *
 * @example [Expo](https://expo.io)
 * @example Expo (https://expo.io)
 *
 * @param value
 * @param url
 */
export declare function fallbackToTextAndUrl(text: string, url: string): string;
/**
 * When linking isn't available, fallback to just displaying the URL.
 *
 * @example [value](https://expo.io)
 * @example https://expo.io
 *
 * @param text
 * @param url
 */
export declare function fallbackToUrl(text: string, url: string): string;
/**
 * When linking isn't available, format the learn more link better.
 *
 * @example [Learn more](https://expo.io)
 * @example Learn more: https://expo.io
 * @param url
 */
export declare function learnMore(url: string): string;
export declare function linkedText(text: string, url: string): string;
export declare function transporterAppLink(): string;
