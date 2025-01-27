import { Base64 } from 'js-base64';

export const safeAtob = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return Base64.decode(str);
};
export const safeBtoa = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return Base64.encode(str);
};
