import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
import { Footer, FireFilesbg } from '@/components/index'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(clsx(inter.variable), 'bg-background text-foreground')}>
        <div className="relative">
          {children}
          <FireFilesbg />
          <Footer />
        </div>
      </body>
    </html>
  )
}
