'use client'
import { BtnList } from '@/app/data'
import NavButton from '../NavButton'
// import useScreenSize from '@/components/hooks/useScreenSize'

// import useScreenSize from '../../hooks/useScreenSize/index.js'
import { useScreenSize } from '@/hooks'
import ResponsiveComponent from '../../ResponsiveComponent'

const Navigation = () => {
  const size = useScreenSize()
  console.log(size)
  const isLarge = size >= 1024
  const isMedium = size >= 768 || size < 1024
  const angleIncrement = 360 / BtnList.length
  return (
    <div className="fixed w-full h-screen flex items-center justify-center z-10">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
              2222
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180
                const radius = isLarge
                  ? 'calc(20vw - 1rem)'
                  : isMedium
                  ? 'calc(30vw - 1rem)'
                  : 'calc(40vw - 1rem)'
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return (
                  <NavButton
                    key={btn.label}
                    x={x}
                    y={y}
                    {...btn}
                  />
                )
              })}
            </div>
          ) : (
            <div className="border w-full h-[300px]">
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-64 items-end xs:items-center justify-center relative group xs:hidden">
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return (
                    <NavButton
                      key={btn.label}
                      x={0}
                      y={0}
                      {...btn}
                      labelDirection="left"
                    />
                  )
                })}
              </div>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-64 items-end xs:items-center justify-center relative group xs:hidden">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map((btn) => {
                  return (
                    <NavButton
                      key={btn.label}
                      x={0}
                      y={0}
                      {...btn}
                      labelDirection="left"
                    />
                  )
                })}
              </div>
            </div>
          )
        }}
      </ResponsiveComponent>
    </div>
  )
}

export default Navigation

{
  /* <div className="flex items-center justify-between hover:pause relative animate-spin-slow group">
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
</div> */
}
