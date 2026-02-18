import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-[#0f172a] flex flex-col justify-center items-center transition-transform duration-700 ${hidden ? '-translate-y-full' : ''}`}>
      <div className="text-center">
        <h1 className="text-white font-spaceGrotesk text-5xl font-bold mb-5 opacity-0 animate-fadeUp">NEXTGEN<span className="text-purple-500">.</span></h1>
        <div className="w-0 h-1 bg-gradient-to-r from-primary to-secondary mt-5 animate-loadProgress"></div>
      </div>
    </div>
  )
}
