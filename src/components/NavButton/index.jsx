import Link from 'next/link'

import { Home, User, Palette, Phone, Github, Linkedin, Twitter, NotebookText } from 'lucide-react'

const getIcon = (icon) => {
  switch (icon) {
    case 'home':
      return (
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'about':
      return (
        <User
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'projects':
      return (
        <Palette
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'contact':
      return (
        <Phone
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )

    case 'github':
      return (
        <Github
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )

    case 'linkedin':
      return (
        <Linkedin
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'twitter':
      return (
        <Twitter
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )

    case 'resume':
      return (
        <NotebookText
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )

    default:
      return (
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
  }
}

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
        className="text-foreground rounded-full flex justify-center
        items-center bg-background/20 border border-accent/30 border-solid  backdrop-blur-[6px]  shadow-glass-insert hover:shadow-2xl"
        aria-label={label}
        name={label}
        target={newTab ? '_blank' : '_self'}
      >
        <span className="p-4 w-14 h-14 relative animate-spin-slow-reverse hover:text-accent">
          {getIcon(icon)}
        </span>
      </Link>
    </div>
  )
}

export default NavButton
