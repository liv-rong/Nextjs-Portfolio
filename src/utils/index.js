import {
  Home,
  Volume2,
  VolumeX,
  User,
  Palette,
  Phone,
  Github,
  Linkedin,
  Twitter,
  NotebookText
} from 'lucide-react'

export const getIcon = (icon) => {
  switch (icon) {
    case 'home':
      return (
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'Volume2':
      return (
        <Volume2
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      )
    case 'VolumeX':
      return (
        <VolumeX
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
