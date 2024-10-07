export const storage = {
  saveData<T>(key: string, data: T): void {
    localStorage.setItem(`$${key}`, JSON.stringify(data));
  },
  getData<T>(key: string): T | null {
    const data = localStorage.getItem(`${key}`);
    return data ? JSON.parse(data) : null;
  },
  removeData(key: string): void {
    localStorage.removeItem(`${key}`);
  },
};
