/* useLocalStorage.ts */

import { useEffect, useState } from 'react'

type InitialValueType<T> = T | (() => T)

export function useLocalStorage<T>(
  key: string,
  initialValue: InitialValueType<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Custom hook that stores the value of a state inside the Local Storage

  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function getSavedValue<T>(key: string, initialValue: InitialValueType<T>): T {
  // Returns the saved value from local Storage (if any) or from the 'initialValue' parameter

  const savedValue = localStorage.getItem(key)

  if (savedValue !== null) {
    return JSON.parse(savedValue) as T
  }

  if (initialValue instanceof Function) {
    return (initialValue as () => T)()
  }

  return initialValue
}
