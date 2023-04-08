const menu = () => {
  const button = document.querySelector(".menu-btn");
  const menu = document.querySelector('.navigate-header');
  const links = document.querySelectorAll(".navigate-header__item");

  const toggleClass = (prop) => {
    button.classList[prop]('active');
    menu.classList[prop]('active');
  };

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      return toggleClass('remove');
    }

    toggleClass('add');
  });

  links.forEach(link => link.addEventListener('click', () => toggleClass('remove')))
}

export default menu;