import Link from 'next/link'
import { getIcon } from '@/utils'

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 "
      style={{
        transform: `translate(${x}, ${y}) `
      }}
    >
      <Link
        href={link}
        className="text-foreground  rounded-full flex justify-center
        items-center  custom-bg"
        aria-label={label}
        name={label}
        target={newTab ? '_blank' : '_self'}
      >
        <span className=" p-4 w-14 h-14  relative animate-spin-slow-reverse group-hover:pause hover:text-accent">
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span
            className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground
          text-sm  rounded-md shadow-lg whitespace-nowrap "
          >
            {label}
          </span>
        </span>
      </Link>
    </div>
  )
}

export default NavButton
