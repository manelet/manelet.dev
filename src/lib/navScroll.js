export default (nav, navMenu, splash, isDark, isHome) => {
  const { height: navHeight } = nav.getBoundingClientRect()
  const { height: splashHeight } = splash.getBoundingClientRect()

  if (window.scrollY > (splashHeight - navHeight)) {
    navMenu.style.display = 'flex'

    if (!isDark) {
      nav.classList.add('text-gray-800')
      nav.classList.remove('text-white')
    } else {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')
    }

    nav.classList.remove('home')
  } else {
    navMenu.style.display = 'none'
    nav.classList.add('home')

    if (!isDark) {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')  
    }
  }
}
