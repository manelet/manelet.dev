function paint (svgs, color) {
  svgs.forEach(svg => {
    if (svg) {
      svg.style.fill = color
      svg.style.stroke = color
    }
  })   
}

export default (nav, navInner, splash, isDark, isHome) => {
  const { height: navHeight } = nav.getBoundingClientRect()
  const { height: splashHeight } = splash.getBoundingClientRect()
  const svgs = [...nav.querySelectorAll('.icons .icon svg'), nav.querySelector('.theme-toggle svg')]
console.log('ntro navscroll', svgs);
  if (window.scrollY > (splashHeight - navHeight)) {
    // navInner.style.display = 'flex'

    if (!isDark) {
      nav.classList.add('text-gray-800')
      nav.classList.remove('text-white')
      paint(svgs, '#2d3748')
    } else {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')
      paint(svgs, '#fff')
    }

    nav.classList.remove('home')
  } else {
    // navInner.style.display = 'none'
    nav.classList.add('home')
    console.log('ntro navscroll2');

    if (!isDark) {
      console.log('ntro navscroll3');

      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')  
      paint(svgs, '#fff')
    }
  }
}
