import Image from 'next/image'
import bg from '../../../../public/background/about-background.png'
import { AboutDetails, Hat, RenderModel } from '@/components/index'
import { projectsData } from '../../data'

export default function Home() {
  return (
    <main className=" w-full flex flex-col justify-center">
      <Image
        alt="image"
        src={bg}
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25 "
      ></Image>

      <div className="w-full h-screen flex justify-center items-center fixed top-1/2 -translate-y-1/2">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col justify-center items-center ">
        <div className=" flex flex-col text-center items-center absolute  top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-9xl text-accent">codeBucks</h1>
          <p className="font-light text-lg text-foreground">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </main>
  )
}
