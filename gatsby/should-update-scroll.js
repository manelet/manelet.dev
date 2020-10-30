export const duration = 500

const shouldUpdateScroll = ({ prevRouterProps, routerProps, getSavedScrollPosition }) => {
  // const projectsFromOutside = routerProps.location.pathname.includes('/projects') && !prevRouterProps.location.pathname.includes('/projects')
  const isHash = routerProps.location.hash !== '' && !routerProps.location.action

  if (isHash) {
    return false
  }


  if (routerProps.location.action === "PUSH") {
    window.scrollTo(0, 0)
    // window.setTimeout(() => window.scrollTo(0, 0), duration)    
    // if (routerProps.location.pathname.includes('/projects')) {
    //   window.scrollTo(0, 0)
    // } else {
    //   window.setTimeout(() => {
    //     window.scrollTo(0, 0)
    //   }, duration)
    // }
  } else {
    const savedPosition = getSavedScrollPosition(routerProps.location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), duration)
  }
  return false
}

export default shouldUpdateScroll