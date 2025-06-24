import './globals.css'
import type { Metadata } from 'next'
import Navbar from './Navbar'
import Footer from './Footer'
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <Script src="https://cdn.jsdelivr.net/npm/typewriter-effect@2.19.0/dist/core.js"></Script>
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}