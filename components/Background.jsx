import { useEffect } from 'react'

export default function Background() {
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const mouse = { x:null, y:null, radius:150 }
    window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y })

    class Particle {
      constructor() {
        this.x = Math.random()*canvas.width
        this.y = Math.random()*canvas.height
        this.size = Math.random()*2
        this.speedX = Math.random() - 0.5
        this.speedY = Math.random() - 0.5
      }
      update() {
        this.x += this.speedX; this.y += this.speedY
        if(this.x>canvas.width || this.x<0) this.speedX=-this.speedX
        if(this.y>canvas.height || this.y<0) this.speedY=-this.speedY
        if(mouse.x && mouse.y) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx*dx+dy*dy)
          if(distance<mouse.radius){
            const angle = Math.atan2(dy,dx)
            const force = (mouse.radius - distance)/mouse.radius
            this.x -= Math.cos(angle)*force*2
            this.y -= Math.sin(angle)*force*2
          }
        }
      }
      draw() {
        ctx.fillStyle = document.body.classList.contains('light') ? '#4f46e5' : '#8b5cf6'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        ctx.fill()
      }
    }

    let particles = []
    const init = () => { particles=[]; for(let i=0;i<(canvas.width*canvas.height)/9000;i++) particles.push(new Particle()) }
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(let i=0;i<particles.length;i++){
        particles[i].update()
        particles[i].draw()
        for(let j=i;j<particles.length;j++){
          let dx = particles[i].x - particles[j].x
          let dy = particles[i].y - particles[j].y
          let distance = Math.sqrt(dx*dx + dy*dy)
          if(distance<100){
            ctx.beginPath()
            ctx.strokeStyle = document.body.classList.contains('light') ? `rgba(79,70,229,${1-distance/100})` : `rgba(139,92,246,${1-distance/100})`
            ctx.lineWidth=0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; init() })
  }, [])

  return <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full z-[-1] opacity-50 pointer-events-none"></canvas>
}
