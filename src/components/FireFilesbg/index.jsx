'use client'

import { useState, useEffect } from 'react'

const createFireFly = () => {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animateDuration: `${Math.random() * 5 + 5}s`
  }
}

const FireFilesbg = () => {
  const [fireFiles, setFireFiles] = useState([])

  useEffect(() => {
    const addFireFile = () => {
      const newFireFly = createFireFly()
      setFireFiles((prevFireFiles) => [...prevFireFiles.slice(-14), newFireFly])
    }
    const interval = setInterval(addFireFile, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireFiles.map((item, index) => {
        return (
          <div
            key={item.id}
            className="absolute rounded-full  w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: item.top,
              left: item.left,
              animation: `move ${item.animateDuration} infinite alternate`
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default FireFilesbg
