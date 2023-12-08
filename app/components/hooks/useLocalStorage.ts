import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setter] = useState<T>(initialValue)

  useEffect(() => {
    const setInitialState = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(key)

        if (storedValue) {
          setState(JSON.parse(storedValue))
        }
      } catch (error) {
        console.error("Error reading from AsyncStorage:", error)
      }
    }

    setInitialState()
  }, [])

  const setState = (newValue: T) => {
    setter(() => {
      AsyncStorage.setItem(key, JSON.stringify(newValue))

      return newValue
    })
  }

  return [state, setState] as [T, (newValue: T) => void]
}
