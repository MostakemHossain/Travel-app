import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import './globals.css'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navber/>
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
