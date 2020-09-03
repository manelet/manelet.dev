export const wrapperAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      // delay: 2,
      staggerChildren: .2
    },
    transitionEnd: {
      display: 'none'
    }    
  },
  show: {
    display: 'flex',
    opacity: 1,
    transition: {
      staggerChildren: .2,
      when: 'beforeChildren'
    }    
  }
}

export const itemAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    // scale: .1,
    transition: {
      duration: .5
    }
  },
  show: {
    opacity: 1,
    x: 0,
    // scale: 1,
    transition: {
      duration: .5
    },    
  }
}