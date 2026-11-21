import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// register once — safe to call multiple times
export function registerGSAP() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
}

export { gsap, ScrollTrigger }
