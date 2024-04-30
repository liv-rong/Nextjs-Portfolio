import Image from 'next/image'
import bg from '../../../../public/background/projects-background.png'
import { ProjectsList, Staff, RenderModel, Wizard } from '@/components/index'
import { projectsData } from '../../data'

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center">
      <Image
        alt="image"
        src={bg}
        fill
        className="w-full h-full object-cover object-center opacity-25"
      ></Image>
      <ProjectsList projects={projectsData} />
      <div className="flex justify-center items-center fixed top-20 left-0 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </main>
  )
}
