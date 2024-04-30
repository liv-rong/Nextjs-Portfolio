import Image from 'next/image'
import bg from '../../../public/background/projects-background.png'

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
      Projects
    </main>
  )
}
