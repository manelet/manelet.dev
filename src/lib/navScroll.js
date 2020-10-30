export default ({ nav, splash }, isHome, isProject) => () => {
  if (isHome) {
    const { height: navHeight } = nav.current.getBoundingClientRect()
    const { height: splashHeight } = splash.current.getBoundingClientRect()

    if (window.scrollY > (splashHeight - navHeight)) {
      nav.current.classList.remove('home')
    } else {
      nav.current.classList.add('home')
    }
  }

  if (isProject) {
    if (window.scrollY >= 500) {
      nav.current.classList.remove('home')
    } else {
      nav.current.classList.add('home')
    }
  }
}
