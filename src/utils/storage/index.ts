import { Value } from "./types";
export function saveUserToLocalStorage(key: string, value: Value) {
  localStorage.setItem(key, JSON.stringify(value));
}
