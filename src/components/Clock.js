import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [time])

  return (
    <h3>{time}</h3>
  )
}

export default Clock
