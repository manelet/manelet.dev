export const duration = 500

const shouldUpdateScroll = props => {
  const { prevRouterProps, routerProps, getSavedScrollPosition } = props

  if (
    routerProps.location.pathname.includes('/projects') &&
    prevRouterProps.location.pathname.includes('/projects')
  ) {
    return false
  }

  if (routerProps.location.action === "PUSH") {
    if (routerProps.location.pathname.includes('/projects')) {
      window.scrollTo(0, 0)
    } else {
      window.setTimeout(() => {
        console.log('scrollToTop');
        window.scrollTo(0, 0)
      }, duration)
    }
  } else {
    const savedPosition = getSavedScrollPosition(routerProps.location)

    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      duration
    )
  }
  return false
}

export default shouldUpdateScroll