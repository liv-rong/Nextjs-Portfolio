import RoundCard from '../Card/RoundCard'
import MusicIcon from '../music/musicIcon'
import Link from 'next/link'
const Header = () => {
  return (
    <div className=" fixed top-4 left-4 right-4 flex justify-between items-center  ">
      <Link
        href="/"
        aria-label="home"
        name="home"
        target="_self"
        className="z-10"
      >
        <RoundCard
          icon="home"
          label="Home"
        />
      </Link>

      <MusicIcon icon="home" />
    </div>
  )
}

export default Header
