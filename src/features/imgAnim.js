import gsap from 'gsap'

function imgAnim() {
  // Gsap scroll image effects
  const wrapperImg = document.querySelector('.wrapper-img')
  if (wrapperImg) {
    const img = wrapperImg.querySelector('.img')
    gsap.to(img, {
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperImg,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3,
        // markers:true
      },
    })
  }
}

export default imgAnim
