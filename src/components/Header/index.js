import RoundCard from '@/components/Card/RoundCard'
import MusicIcon from '@/components/Music/MusicIcon'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="w-screen fixed px-2 top-4 left-0 right-0 flex justify-between items-center  z-50">
      <Link
        href="/"
        aria-label="home"
        name="home"
        target="_self"
        className="z-50"
      >
        <RoundCard
          icon="home"
          label="Home"
        />
      </Link>
      <div>
        <MusicIcon />
        <div id="my-modal" />
      </div>
    </div>
  )
}

export default Header
