import { useEffect, useState, useCallback } from 'react'
import debounce from '../lib/debounce'

const DEBOUNCE_MS = 50
const isSsr = typeof window === 'undefined'
const getSize = () => ({
  width: isSsr ? null : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
  height: isSsr ? null : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight 
})

const useWindow = () => {
  const [size, setSize] = useState(getSize())
  const handleOnResize = debounce(useCallback(() => setSize(getSize()), []), DEBOUNCE_MS)

  useEffect(() => {  
    window.addEventListener('resize', handleOnResize, false)
    return () => window.removeEventListener('resize', handleOnResize, false)
  }, [handleOnResize])

  return { ...size, isMobile: size.width <= 480 }
}

export default useWindow
