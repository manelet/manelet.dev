export default (nav, navInner, splash, isDark, isHome) => {
  const { height: navHeight } = nav.getBoundingClientRect()
  const { height: splashHeight } = splash.getBoundingClientRect()
  const svgs = [...nav.querySelectorAll('.icons .icon svg'), nav.querySelector('.theme-toggle svg')]

  if (window.scrollY > (splashHeight - navHeight)) {
    // navInner.style.display = 'flex'
    console.log('svgs', svgs);

    if (!isDark) {
      nav.classList.add('text-gray-800')
      nav.classList.remove('text-white')
      svgs.forEach(svg => {
        svg.style.fill = '#2d3748'
        svg.style.stroke = '#2d3748'
      })
    } else {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')
      svgs.forEach(svg => {
        svg.style.fill = '#fff'
        svg.style.stroke = '#fff'
      })      
    }

    nav.classList.remove('home')
  } else {
    // navInner.style.display = 'none'
    nav.classList.add('home')

    if (!isDark) {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')  
      svgs.forEach(svg => {
        svg.style.fill = '#fff'
        svg.style.stroke = '#fff'
      })      
    }
  }
}
