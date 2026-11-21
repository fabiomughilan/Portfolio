'use client'

import { useEffect, useRef } from 'react'

const COUNT   = 90
const MAX_DIST = 110
const SPEED   = 0.28

function getAccent() {
  const dark = document.documentElement.dataset.theme === 'dark'
  return dark
    ? { node: '#5cb87a', line: '#3d9e62', bg: '#0d1510' }
    : { node: '#195d49', line: '#2d7a60', bg: '#f3f0e8' }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let mouse = { x: -9999, y: -9999 }

    // init particles
    type P = { x: number; y: number; z: number; vx: number; vy: number; vz: number }
    let W = 0, H = 0
    let particles: P[] = []

    function resize() {
      if (!canvas || !ctx) return
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    function init() {
      resize()
      particles = Array.from({ length: COUNT }, () => ({
        x:  (Math.random() - 0.5) * W * 1.4,
        y:  (Math.random() - 0.5) * H * 1.4,
        z:  Math.random(),           // depth 0–1 for size + opacity
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        vz: (Math.random() - 0.5) * 0.002,
      }))
    }

    function draw() {
      raf = requestAnimationFrame(draw)
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)

      const col = getAccent()
      const cx = W / 2, cy = H / 2

      // update & draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        if (p.x < -W * 0.7 || p.x > W * 0.7) p.vx *= -1
        if (p.y < -H * 0.7 || p.y > H * 0.7) p.vy *= -1
        if (p.z < 0 || p.z > 1) p.vz *= -1

        // mouse repulsion
        const sx = cx + p.x, sy = cy + p.y
        const dx = sx - mouse.x, dy = sy - mouse.y
        const d  = Math.hypot(dx, dy)
        if (d < 90) {
          const f = (90 - d) / 90 * 0.6
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }

        const r  = 1.5 + p.z * 2        // 1.5–3.5 px
        const op = 0.4 + p.z * 0.6      // 0.4–1.0
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fillStyle = col.node + Math.round(op * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }

      // draw connecting lines
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const pi = particles[i], pj = particles[j]
          const sx1 = cx + pi.x, sy1 = cy + pi.y
          const sx2 = cx + pj.x, sy2 = cy + pj.y
          const dist = Math.hypot(sx1 - sx2, sy1 - sy2)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(sx1, sy1)
            ctx.lineTo(sx2, sy2)
            ctx.strokeStyle = col.line + Math.round(alpha * 255).toString(16).padStart(2, '0')
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    init()
    draw()

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse = { x: -9999, y: -9999 } }
    const onResize = () => { resize() }

    canvas.addEventListener('mousemove', onMouse)
    canvas.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousemove', onMouse)
      canvas.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
