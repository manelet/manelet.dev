import { useEffect, useState } from 'react'

const isSsr = typeof window === 'undefined'

const useWindow = () => {
  const getSize = () => ({
    width: isSsr ? null : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    height: isSsr ? null : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight 
  })
  const [size, setSize] = useState(getSize())

  useEffect(() => {  
    const handleOnResize = () => setSize(getSize())
    window.addEventListener('resize', handleOnResize, false)
    return () => window.removeEventListener('resize', handleOnResize, false)
  }, [])

  const flags = isSsr ? {} : { isMobile: size.width <= 480, isTablet: size.width < 768 }

  return {
    ...size,
    ...flags
  }
}

export default useWindow
