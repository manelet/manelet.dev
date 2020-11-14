import {
  createRef,
  useState,
  useCallback,
  useLayoutEffect
} from 'react'

const refs = {
  wrapper: createRef(null),
  toggle: createRef(null),
  menu: createRef(null)
}

export function useDropdown () {
  const [open, toggleOpen] = useState(false)
  const [isHovered, toggleIsHovered] = useState(false)

  const onMouseOut = useCallback(e => {
    toggleOpen(false)
    // if (refs.menu.current.classList.contains('open')) {
    //   refs.menu.current.classList.remove('open')
    // }    
  }, [])

  const onMouseOver = useCallback(e => {
    toggleOpen(true)
    // setTimeout(() => {
    //   if (!refs.menu.current.classList.contains('open')) {
    //     refs.menu.current.classList.add('open')
    //   }
    // }, 800)
  }, [])

  // const positionMenu = () => {
  //   const transform = `translateX(${(refs.menu.current.offsetWidth - refs.toggle.current.offsetWidth)}px)`
  //   refs.menu.current.style.transform = transform
  // } 

  useLayoutEffect(() => {
    refs.wrapper.current.addEventListener('mouseenter', onMouseOver)
    refs.wrapper.current.addEventListener('mouseleave', onMouseOut)

    // positionMenu()

    return () => {
      refs.wrapper.current.removeEventListener('mouseenter', onMouseOver)
      refs.wrapper.current.removeEventListener('mouseleave', onMouseOut)      
    }

    // eslint-disable-next-line
  }, [])
  
  return { refs, isHovered, toggleIsHovered, open }
}
