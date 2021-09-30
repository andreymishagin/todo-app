import React from "react";
import { Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
