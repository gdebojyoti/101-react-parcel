import { useState, useEffect } from 'react'

function useLocalStorage (key) {
  const [lsData, setLsData] = useState(readFromLocalStorage(key))

  // useEffect(() => {
  //   setValue(value)
  // }, [initValue])

  function setValue (value) {
    window.localStorage.setItem(key, value)
    setLsData(value)
  }

  return [lsData, setValue]
}

function readFromLocalStorage (key) {
  return window.localStorage.getItem(key)
}

export default useLocalStorage