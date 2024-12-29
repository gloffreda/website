import CryptoJS from 'crypto-js';

function decrypt(encrypted: string): string {
  const decrypted = CryptoJS.AES.decrypt(encrypted, import.meta.env.VITE_PASSPHRASE ?? '');
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function encrypt(string: string): string {
  const enc = CryptoJS.AES.encrypt(string, import.meta.env.VITE_PASSPHRASE ?? '');
  return enc.toString();
}
export const cryptography = { encrypt, decrypt };
