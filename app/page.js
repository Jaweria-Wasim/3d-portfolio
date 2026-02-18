'use client'

import HeroSection from '../sections/HeroSection'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Achievements from '../sections/Achievements'
import Work from '../sections/Work'
import Contact from '../sections/Contact'

export default function Page() {
  return (
    <main>
      <section id="page-home" className="page-section">
        <HeroSection />
      </section>

      <section id="page-about" className="page-section">
        <About />
      </section>

      <section id="page-skills" className="page-section">
        <Skills />
      </section>

      <section id="page-achievements" className="page-section">
        <Achievements />
      </section>

      <section id="page-work" className="page-section">
        <Work />
      </section>

      <section id="page-contact" className="page-section">
        <Contact />
      </section>
    </main>
  )
}
