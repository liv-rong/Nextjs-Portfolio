import SquareCard from '@/components/card/SquareCard'

const AboutDetails = () => {
  return (
    <div className="py-20 w-full border">
      <h1>About Details</h1>
      {/* Add more details about the project */}
      <div className="grid grid-cols-12 gap-8 w-full">
        <SquareCard className={'col-span-8 row-span-2 flex-col items-start'}>
          <h2 className="text-2xl text-left w-full capitalize break-keep">
            Architect Of Enchantment
          </h2>
          <p className="break-keep font-light">
            My journey in web development is powered by an array of mystical tools and languages,
            with JavaScript casting the core of my enchantments. I wield frameworks like React.js
            and Next.js with precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the Jamstack empower me to
            create fast, secure, and dynamic experiences, while my design skills ensure every
            creation is not only functional but visually captivating. Join me as I continue to
            explore new spells and technologies to shape the future of the web.
          </p>
        </SquareCard>

        <SquareCard className={'col-span-4 text-accent'}>
          <p className="font-semibold w-full text-left text-5xl">
            25+ <sub className="font-semibold text-base">client</sub>
          </p>
        </SquareCard>

        <SquareCard className={'col-span-4 text-accent'}>
          <p className="font-semibold w-full text-left text-5xl">
            2+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </SquareCard>
        <SquareCard className={'col-span-4 !p-0'}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=ivy-rong&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="code_bucks"
            loading="lazy"
          />
        </SquareCard>

        <SquareCard className={'col-span-8 !p-0'}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=ivy-rong&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="code_bucks"
            loading="lazy"
          />
        </SquareCard>

        <SquareCard className={'col-span-full'}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,d3,docker,express,git,mysql,nestjs,nextjs,nodejs,nuxtjs,pinia,postgres,react,sass,supabase,tailwind,ts,vite,vue,prisma"
            alt="code_bucks"
            loading="lazy"
          />
        </SquareCard>
      </div>
    </div>
  )
}

export default AboutDetails
