export default (target, offset = 0) => {
  const el = document.querySelector(target)

  if (!el) {
    return
  }

  window.scrollBy({
    top: Math.floor(el.getBoundingClientRect().top) - offset,
    left: 0,
    behavior: 'smooth'
  })
}