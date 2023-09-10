// import libs :
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// import components :
import header from './features/header'
import imgAnim from './features/imgAnim'
import sectionFaq from './features/sectionFaq'
// import animateTitle from './features/animateTitle'
// import createBadge from './features/createBasge'

// import styles :
import './styles/style.css'

// main js :
console.log('main.js')

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  orientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 1.5,
})

lenis.on('scroll', () => {
  ScrollTrigger.update()
  const progressTag = document.querySelector('div.progress')
  const bodyTag = document.querySelector('body')
  const pixels = window.scrollY
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  // for progress on x way (width)
  progressTag.style.width = `${100 * percentage}%`
  progressTag.style.opacity = `${percentage + 0.5}`
})

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// run fuctions components :
header()
sectionFaq()
imgAnim()
// createBadge()
// animateTitle()

// animate title h1 intro :
const titleH1 = document.querySelector('.section-hero .title-h1')

// let split = SplitText.create(titleH1, { type: 'chars' })
let split = SplitType.create(titleH1, { type: 'chars' })

gsap.set(titleH1, {
  opacity: 1,
})

gsap.set(split.chars, {
  y: 32,
  opacity: 0,
})

gsap.timeline().to(
  split.chars,
  {
    y: 0,
    opacity: 1,
    stagger: 0.02,
    // ease: 'sine',
  },
  0.5
)
