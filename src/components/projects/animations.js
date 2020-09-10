export const variants = {
  hover: {
    scale: 1.01,
    transition: {
      duration: .2
    }
  },
  idle: {
    scale: 1,
    transition: {
      duration: .2
    }    
  },
  enter: {
    opacity: 1,
    scale: [1, 1.01, 1]
  },
  exit: {
    opacity: 0,
    scale: [1.01, 1]
  }
}

export const contentVariants = {
  initial: {
    opacity: 0,
    height: 0,
    transition: {
      delay: .5,
      duration: .5
    }
  },
  animate: {
    opacity: 1,
    height: '100%',
    transition: {
      duration: .5
    }    
  },
}