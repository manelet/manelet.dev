export default target => {
  const el = document.querySelector(target)

  if (!el) {
    return
  }

  window.scrollBy({
    top: Math.floor(el.getBoundingClientRect().top),
    left: 0, behavior: 'smooth'
  })
}