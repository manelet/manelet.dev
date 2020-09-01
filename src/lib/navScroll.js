const handleSvg = nav => {
  return {
    svgs: [
      ...nav.querySelectorAll('.icons .icon svg'),
      nav.querySelector('.theme-toggle svg'),
      ...nav.querySelectorAll('.menu svg')
    ],
    paint: (svgs, color) => {
      svgs.forEach(svg => {
        if (svg) {
          svg.style.fill = color
          svg.style.stroke = color
        }
      })  
    }
  }
}

export default ({ nav, splash, isDark, isHome }) => {
  const { svgs, paint } = handleSvg(nav)

  if (isHome) {
    const { height: navHeight } = nav.getBoundingClientRect()
    const { height: splashHeight } = splash.getBoundingClientRect()
  
    if (window.scrollY > (splashHeight - navHeight)) {
      const color = !isDark ? '#2d3748' : '#fff'
      nav.style.color = color
      paint(svgs, color)
      nav.classList.remove('home')
    } else {
      nav.classList.add('home')
  
      if (!isDark) {
        nav.style.color = '#fff'
        paint(svgs, '#fff')
      }
    }
  } else {
    const color = !isDark ? '#2d3748' : '#fff'
    nav.style.color = color
    paint(svgs, color)
  }
}
