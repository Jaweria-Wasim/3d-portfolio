'use client'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Cursor from '../components/Cursor'
import Preloader from '../components/Preloader'
import Background from '../components/Background'

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.add('light')
    else document.body.classList.remove('light')
  }, [theme])

  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Preloader />
        <Cursor />
        <Background />
        <Nav toggleTheme={toggleTheme} theme={theme} />
        {children}
      </body>
    </html>
  )
}
