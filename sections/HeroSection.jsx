'use client'
import { useEffect, useState } from 'react'

const phrases = ['Future UI', 'Web 3.0', 'Immersive 3D']

export default function HeroSection() {
  const [i, setI] = useState(0)
  const [j, setJ] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const type = () => {
      const current = phrases[i]

      if (!isDeleting) {
        setText(current.substring(0, j + 1))
        setJ(j + 1)

        if (j + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setText(current.substring(0, j - 1))
        setJ(j - 1)

        if (j - 1 === 0) {
          setIsDeleting(false)
          setI((i + 1) % phrases.length)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? 60 : 110)
    return () => clearTimeout(timer)
  }, [i, j, isDeleting])

  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        text-center
        px-4 sm:px-6
        pt-32 sm:pt-36
        page-section
      "
    >
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="
            inline-block
            px-5 py-2
            mb-6
            text-xs sm:text-sm
            font-semibold
            rounded-full
            border border-[var(--border)]
            backdrop-blur-md
            bg-white/5
          "
        >
          🚀 Available for hire
        </div>

        {/* Heading */}
        <h1
          className="
            font-extrabold
            leading-tight
            mb-6
            text-[clamp(2.2rem,8vw,6rem)]
          "
        >
          Crafting <br />
          <span className="text-[var(--text-muted)]">{text}</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-sm sm:text-base
            text-[var(--text-muted)]
            max-w-xl
            mx-auto
            leading-7
          "
        >
          Building immersive 3D web applications and high-performance interfaces
          for the next generation.
        </p>

        {/* Buttons */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-4
            justify-center
            mt-10
          "
        >
          <button
            onClick={() =>
              document
                .getElementById('page-work')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="
              px-8 sm:px-10 py-4
              rounded-full
              font-semibold
              flex items-center justify-center gap-2
              border border-[var(--border)]
              bg-[var(--primary)]
              text-white
              transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-primary/40
            "
          >
            See Portfolio
            <i className="fas fa-arrow-right text-sm"></i>
          </button>

          <button
            onClick={() =>
              document
                .getElementById('page-skills')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="
              px-8 sm:px-10 py-4
              rounded-full
              font-semibold
              border border-[var(--border)]
              text-[var(--text-main)]
              bg-white/5 backdrop-blur-md
              transition-all duration-300
              hover:bg-[var(--primary)]
              hover:text-white
              hover:scale-105
            "
          >
            View Skills
          </button>
        </div>
      </div>
    </div>
  )
}
