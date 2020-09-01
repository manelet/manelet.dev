export default {
  hidden: {
    opacity: 0,
    scale: .9,
    transitionEnd: {
      display: 'none'
    }
  },
  show: {
    opacity: 1,
    display: 'flex',
    scale: [1.05, 1.1, 1],
    transition: {
      duration: .2
    }
  }
}