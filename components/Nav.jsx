'use client'
import { useState } from 'react'

export default function Nav({ toggleTheme, theme }) {
  const pages = ['home', 'about', 'skills', 'achievements', 'work', 'contact']
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (pageId) => {
    // Close mobile menu on click
    setMobileOpen(false)

    // Scroll to section
    const section = document.getElementById(`page-${pageId}`)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    // Remove active state from all buttons
    document.querySelectorAll('.nav-links button').forEach((btn) =>
      btn.classList.remove('active')
    )

    // Add active state to clicked button
    document.getElementById(`btn-${pageId}`)?.classList.add('active')
  }

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[90%] max-w-[1200px]
        bg-[var(--nav-bg)] backdrop-blur-xl
        p-4 md:p-6
        rounded-full
        flex justify-between items-center
        z-50
        border border-[var(--border)]
        shadow-2xl
      "
    >
      {/* LOGO */}
      <button
        onClick={() => handleNav('home')}
        className="logo font-spaceGrotesk font-bold text-xl text-[var(--text-main)]"
      >
        NEXT<span className="text-primary">GEN</span>.
      </button>

      {/* DESKTOP LINKS */}
      <ul className="nav-links hidden md:flex gap-8 items-center">
        {pages.map((page) => (
          <li key={page}>
            <button
              id={`btn-${page}`}
              onClick={() => handleNav(page)}
              className={page === 'home' ? 'active' : ''}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}

        {/* THEME TOGGLE ALWAYS VISIBLE ON DESKTOP */}
        <li>
          <button
            onClick={toggleTheme}
            className="
              text-[var(--text-main)] text-xl
              ml-4
              transition-transform duration-300
              hover:scale-110
            "
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </li>
      </ul>

      {/* MOBILE MENU + THEME */}
      <div className="md:hidden flex items-center gap-4">
        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="
            text-[var(--text-main)] text-xl
            transition-transform duration-300
            hover:scale-110
          "
          aria-label="Toggle theme"
        >
          <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[var(--text-main)] text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            absolute top-full left-1/2 -translate-x-1/2 mt-4
            w-[90%] bg-[var(--nav-bg)] border border-[var(--border)] rounded-xl
            backdrop-blur-xl flex flex-col items-center py-4 gap-4
            shadow-xl animate-fadeIn
          "
        >
          {pages.map((page) => (
            <button
              key={page}
              id={`btn-${page}-mobile`}
              onClick={() => handleNav(page)}
              className="text-lg font-medium w-full text-center py-2 hover:bg-[var(--surface-hover)] rounded-xl transition"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
