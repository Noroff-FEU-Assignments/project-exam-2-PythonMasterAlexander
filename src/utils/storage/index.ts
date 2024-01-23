import { Value } from "./types";
export function saveUserToLocalStorage(key: string, value: Value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function loadUserFromLocalStorage(key: string) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
export function removeUserFromLocalStorage() {
  localStorage.clear();
}
