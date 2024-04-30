import { BtnList } from '@/app/data'
import NavButton from '../NavButton'
const Navigation = () => {
  const angleIncrement = 360 / BtnList.length
  return (
    <div className="fixed w-full h-screen flex items-center justify-center z-10">
      <div className="flex items-center justify-between relative animate-spin-slow">
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
