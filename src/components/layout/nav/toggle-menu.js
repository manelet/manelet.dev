export default ({ navInner, navMenu, burger }) => {
  navInner.classList.toggle('menu-mobile-opened')
  navMenu.classList.toggle('menu-mobile-opened')

  if (burger.classList.contains('is-open')) {
    burger.classList.remove('is-open')
    burger.classList.add('is-closed')
    document.body.classList.remove('locked')
  } else {
    document.body.classList.add('locked')
    burger.classList.add('is-open')
    burger.classList.remove('is-closed')      
  }
}