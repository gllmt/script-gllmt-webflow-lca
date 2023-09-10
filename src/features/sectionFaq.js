import gsap from 'gsap'

function sectionFaq() {
  // FAQ js :
  const items = gsap.utils.toArray('.item')

  let lastItem

  items.forEach((item) => {
    item.tl = gsap
      .timeline({
        paused: true,
        onComplete: () => item.classList.add('active'),
      })
      .to(item.querySelector('.content-wrapper'), {
        duration: 0.6,
        height: item.querySelector('.content').scrollHeight,
      })
      .from(
        item.querySelectorAll('.content > p'),
        {
          duration: 0.3,
          y: -40,
          opacity: 0,
          stagger: 0.15,
          ease: 'sine',
        },
        0.15
      )

    item.addEventListener('click', () => {
      // Reverse the other animations
      items.forEach((myItem) => myItem.tl.reverse())
      if (lastItem) {
        lastItem.classList.remove('active')
      }

      if (
        typeof lastItem === 'undefined' ||
        (lastItem && !lastItem.isSameNode(item))
      ) {
        // Play the clicked item's animation
        item.tl.play()
        lastItem = item
      } else {
        lastItem = undefined
      }
    })
  })
}

export default sectionFaq
