const isCordova = (): boolean => typeof window !== "undefined" && (
  typeof (<any>window).PhoneGap !== "undefined" ||
    typeof (<any>window).Cordova !== "undefined" ||
    typeof (<any>window).cordova !== "undefined");

export default isCordova;
// https://github.com/tus/tus-js-client/blob/ce2e2c57e8f703a240df6dc2994b071b990f953f/lib/browser/isCordova.js
