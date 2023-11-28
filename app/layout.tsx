'use client'
import './globals.css'
import localFont from 'next/font/local'

const rubik = localFont({
  src: '../public/fonts/Rubik-VariableFont_wght.ttf',
  variable: '--font-rubik'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${rubik.variable} font-sans bg-cover  dark:bg-[#313E51] dark:bg-[url('../public/images/pattern-background-desktop-dark.svg')] bg-[url('../public/images/pattern-background-desktop-light.svg')]`}>
        {children}
      </body>
    </html>
  )
}