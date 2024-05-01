import Image from 'next/image'
import bg from '../../public/background/home-background.png'
import { MusicIcon, Navigation, Wizard, RenderModel } from '@/components'

export default function Home() {
  return (
    <main
      className="flex h-screen flex-col items-center justify-between relative
  "
    >
      <Image
        alt="image"
        src={bg}
        fill
        className="w-full h-full object-cover object-center opacity-25"
      ></Image>
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>

        {/* 3D 渲染 */}
      </div>
      <div className="flex  absolute top-0 right-0 m-2">
        <MusicIcon />
        <div id="my-modal" />
      </div>
    </main>
  )
}
