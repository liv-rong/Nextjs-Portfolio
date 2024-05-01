import Image from 'next/image'
import bg from '../../../../public/background/contact-background.png'
import { AboutDetails, RenderModel } from '@/components/index'

import dynamic from 'next/dynamic'
const Hat = dynamic(() => import('@/components/Models/Hat'), {
  ssr: false
})

export const metadata = {
  title: 'About'
}

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center">
      <Image
        alt="image"
        src={bg}
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25 "
        priority
        sizes="100vw"
      ></Image>

      <div className=" w-[120%] h-1/5  sm:h-1/3  absolute top-44 sm:top-32 -translate-y-1/4 -left-1/5  z-10">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative  w-full h-[700px] flex flex-col justify-center items-center ">
        <div className=" flex flex-col text-center items-center absolute  top-[50%]  sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-6xl sm:text-9xl text-accent">codeBucks</h1>
          <p className="font-light text-base sm:text-lg text-foreground">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </main>
  )
}
