export default function blockResizeTransition() {
  let timer = null;

  window.addEventListener('resize', () => {
    if(timer) {
      clearTimeout(timer);
    }

    document.body.classList.add('_resizing');
    timer = setTimeout(() => document.body.classList.remove('_resizing'), 300);
  })
}
