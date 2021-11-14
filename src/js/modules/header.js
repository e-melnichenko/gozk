export default function initHeader() {
  if(document.body.classList.contains('_dark-header')) return

  window.addEventListener('scroll', onScroll);
  // window.addEventListener('resize', debounce(onResize, 100))

  function onScroll() {
    if(window.scrollY > 20) {
      document.body.classList.add('_colored-header')
    } else {
      document.body.classList.remove('_colored-header')
    }
  }

  // function onResize() {

  // }
}
