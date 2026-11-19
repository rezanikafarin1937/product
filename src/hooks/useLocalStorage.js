
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const localData = localStorage.getItem(key);

      if (localData !== null) {
        return JSON.parse(localData);
      }

      return initialValue;
    } catch (error) {
      console.error("LocalStorage Error:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Save LocalStorage Error:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
