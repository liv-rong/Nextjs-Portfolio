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

  useEffect(() => {}, [])

  return <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"></div>
}

export default FireFilesbg
