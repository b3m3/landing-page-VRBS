const accordion = () => {
  const titles = document.querySelectorAll(".footer__nav h5");

  const onToggle = (el) => {
    if (el.nextElementSibling.classList.contains('active')) {
      el.nextElementSibling.classList.remove('active');
      el.nextElementSibling.style.height = 0;
    } else {
      titles.forEach(el => {
        el.nextElementSibling.classList.remove('active');
        el.nextElementSibling.style.height = 0;
      })
      el.nextElementSibling.classList.add('active');
      el.nextElementSibling.style.height = `${el.nextElementSibling.scrollHeight}px`
    }

    if (document.documentElement.clientWidth > 475) {
      titles.forEach(el => {
        el.nextElementSibling.style.height = '';
      })
    }
  }

  titles.forEach(el => {
    el.addEventListener("click", () => onToggle(el));
    window.addEventListener('resize', () => onToggle(el));
  })
}

export default accordion;