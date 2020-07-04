export default (nav, navMenu, splash, isHome, isDark) => {
  const { height: navHeight } = nav.getBoundingClientRect()
  const { height: splashHeight } = splash.getBoundingClientRect()

  if (window.scrollY > (splashHeight - navHeight)) {
    if (isHome) {
      navMenu.style.display = 'flex'
    }

    if (!isDark) {
      nav.classList.add('text-gray-800')
      nav.classList.remove('text-white')
    } else {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')
    }
  } else {
    if (isHome) {
      navMenu.style.display = 'none'
    }
 
    if (!isDark) {
      nav.classList.remove('text-gray-800')
      nav.classList.add('text-white')  
    }
  }
}