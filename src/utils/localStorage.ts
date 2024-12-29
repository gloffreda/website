import { cryptography } from './cryptography';

function setItem(key: string, item: string): void {
  localStorage.setItem(key, cryptography.encrypt(item));
}
function getItem(key: string): string | null {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return cryptography.decrypt(item);
  } catch {
    return null;
  }
}

function removeItem(key: string): void {
  localStorage.removeItem(key);
}
function clear(): void {
  localStorage.clear();
}
export const localStorageUtils = {
  setItem,
  getItem,
  removeItem,
  clear,
};
