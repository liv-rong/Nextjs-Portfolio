'use client'
import { BtnList } from '@/app/data'
import NavButton from '../NavButton'
// import useScreenSize from '@/components/hooks/useScreenSize'

import useScreenSize from '../../hooks/useScreenSize/index.js'

const Navigation = () => {
  const size = useScreenSize()
  console.log(size)
  const angleIncrement = 360 / BtnList.length
  return (
    <div className="fixed w-full h-screen flex items-center justify-center z-10">
      <div className="flex items-center justify-between hover:pause relative animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180

          const radius = 'calc(20vw - 1rem)'
          const x = `calc(${radius}*${Math.cos(angleRad)})`
          const y = `calc(${radius}*${Math.sin(angleRad)})`
          return (
            <NavButton
              key={index}
              x={x}
              y={y}
              {...btn}
            ></NavButton>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
