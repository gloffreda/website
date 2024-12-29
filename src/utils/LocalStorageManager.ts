import { localStorageUtils } from './localStorage';

export const localStorageKeys = {
  LOCALE: '@lramos-app:locale',
};

export class LocalStorageManager {
  async setItem(key: string, item: string): Promise<void> {
    localStorageUtils.setItem(key, item);
  }
  async getItem(key: string): Promise<string | null> {
    const item = localStorageUtils.getItem(key);
    if (!item) return null;
    return item;
  }
  async removeItem(key: string): Promise<void> {
    localStorageUtils.removeItem(key);
  }
  async clear(): Promise<void> {
    localStorageUtils.clear();
  }
}

export const localStorageManager = new LocalStorageManager();
