import { Header, Footer } from '@/components/index'
export default function SubPagesLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <Header />
      <div className="z-20">{children}</div>
    </div>
  )
}
