// import gsap from 'gsap'
// import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function header() {
  // const headerTag = document.querySelector('.header')

  // const toggleHeader = function () {
  //   const pixels = window.scrollY

  //   headerTag.classList.toggle('scrolled', pixels > 60)
  // }

  // const fadeBox = function () {
  //   const pixels = window.scrollY
  //   const alpha = Math.min(pixels / 1000, 0.25)
  //   // const alpha_alt = Math.min(pixels / 200)
  //   headerTag.style.boxShadow = `0 4px 24px rgba(70, 90, 62, ${alpha})`
  // }

  // if (window.innerWidth > 768) {
  //   fadeBox()
  //   toggleHeader()

  //   document.addEventListener('scroll', function () {
  //     toggleHeader()
  //     fadeBox()
  //   })
  // }

  // test section active :
  const names = ['services', 'processus', 'tarifs', 'about', 'faq', 'contact']

  names.forEach((name) => {
    let section = document.querySelector('#' + name)
    let nav = document.querySelector('#btn-' + name)
    // for class toggling - we'll trigger when it's 40% from the top
    ScrollTrigger.create({
      trigger: section,
      start: 'top 40%',
      end: 'bottom 40%',
      toggleClass: { targets: nav, className: 'selected' },
    })

    // for clicking the nav and animating to the correct spot
    // let trigger = ScrollTrigger.create({
    //   trigger: section,
    //   start: 'top top',
    // })
    // nav.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   gsap.to(window, { scrollTo: trigger.start })
    // })
  })

  // mobile menu :
  const button = document.querySelector('.btn-menu-mobile')
  const submenu = document.querySelector('.menu-mobile')

  if (button) {
    // let buttonText = button.querySelector('.btn-txt')
    button.addEventListener('click', function (e) {
      e.preventDefault()
      let ariaTest = button.getAttribute('aria-expanded')

      if (ariaTest == 'true') {
        button.setAttribute('aria-expanded', false)
        button.innerHTML = 'Menu'
        document
          .querySelectorAll('.menu-mobile.--open')
          .forEach(function (sbmn) {
            sbmn.classList.toggle('--open', false)
          })
      } else {
        button.setAttribute('aria-expanded', true)
        button.innerHTML = 'Fermer'
        document
          .querySelectorAll('.menu-mobile.--open')
          .forEach(function (sbmn) {
            sbmn.classList.toggle('--open', false)
          })
        submenu.classList.toggle('--open', true)
      }
    })
  }
}

export default header
