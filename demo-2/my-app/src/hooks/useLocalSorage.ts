import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialState: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialState === "function") return (initialState as () => T)()
    return initialState
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue];
}