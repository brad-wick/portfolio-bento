import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Bradley | Portfolio',
  description: 'Bradley Addiel Gonzalez Flores | Software Engineer | Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen w-full flex items-center justify-center bg-gray-100 relative`}
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, #c4b5fd 1px, transparent 1px), linear-gradient(to bottom, #c4b5fd 1px, transparent 1px)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
