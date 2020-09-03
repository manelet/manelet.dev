export default ({ nav, splash }) => () => {
  if (splash.current) {
    const { height: navHeight } = nav.current.getBoundingClientRect()
    const { height: splashHeight } = splash.current.getBoundingClientRect()

    if (window.scrollY > (splashHeight - navHeight)) {
      nav.current.classList.remove('home')
    } else {
      nav.current.classList.add('home')
    }
  }
}
