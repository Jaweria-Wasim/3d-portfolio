'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    const outline = document.querySelector('.cursor-outline')

    const moveCursor = (e) => {
      const { clientX, clientY } = e

      dot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
      outline.animate(
        {
          transform: `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
        },
        { duration: 400, fill: 'forwards', easing: 'ease-out' }
      )
    }

    window.addEventListener('mousemove', moveCursor)

    document.querySelectorAll('a, button, input, textarea, .skill-pill').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
    })

    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'))
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  )
}
