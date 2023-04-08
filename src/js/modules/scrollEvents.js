const scrollEvents = (Scrollbar, wrapper) => {
  const speedElems = document.querySelectorAll('.speed-elem');

  const scrollbar = Scrollbar.init(wrapper, {
    damping: "0.05",
    renderByPixels: true
  })

  const scrollIntoView = () => {
    const footerLogo = document.querySelector('.top-footer__item a');
    const buttons = document.querySelectorAll('.navigate-header__link');
    const contactBtn = document.querySelector('.navigate-header__btn');
    const joinBtn = document.querySelector('.info-hero__join');

    const hero = document.querySelector('.hero');
    const service = document.querySelector('.services');
    const about = document.querySelector('.about');
    const team = document.querySelector('.team');
    const contact = document.querySelector('.contact');

    const btns = [contactBtn, joinBtn];
    const contents = [hero, service, about, team];

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => scrollbar.scrollIntoView(contents[i]));
    })

    btns.forEach(btn => {
      btn.addEventListener('click', () => scrollbar.scrollIntoView(contact));
    })

    footerLogo.addEventListener('click', () => {
      scrollbar.scrollIntoView(hero);
    })
  }

  const heroEvents = (offsetY) => {
    speedElems.forEach(el => {
      const speen = el.dataset.speed;

      if (offsetY) {
        el.style.transform = `translate3d(0, ${offsetY / speen}px, 0)`;
      }
    })
  }

  const onAnimateElems = () => {
    const serviceItems = document.querySelectorAll('.body-service__item');
    const socialIconsWrapps = document.querySelectorAll('.swiper-slide');

    const addClasses = (...classes) => classes;

    const setServiceDellay = (i) => {
      return i === 1 || i === 4 ? 1 : i === 2 || i === 5 ? 2 : i === 3 || i === 6 ? 3 : null;
    };

    serviceItems.forEach((el, i) => el.classList.add(
      ...addClasses('animate', 'scale', 'fade-left', 'fade-up', `delay-${setServiceDellay(i + 1)}00`)
    ))

    socialIconsWrapps.forEach(el => {
      const item = el.querySelectorAll('.body-team__socials-item');
  
      for (let i = 0; i < item.length; i++) {
        item[i].classList.add(
          ...addClasses('animate', 'fade-left-200', `delay-${i + 1}00`)
        )
      }
    })

    const animateElems = document.querySelectorAll('.animate');

    animateElems.forEach(el => {
      const start = el.getBoundingClientRect().top;
      const clientHeight = document.documentElement.clientHeight / 1.24;

      if (start < clientHeight) {
        el.style.cssText = `opacity: 1; transform: translate(0); transform: scale(1);`;
      } else {
        el.style.cssText = '';
      }
    })
  }

  heroEvents();
  onAnimateElems();
  scrollIntoView();

  scrollbar.addListener((status) => {
    const offsetY = status.offset.y;

    heroEvents(offsetY);
    onAnimateElems();
  })

  scrollbar.removeListener(() => {
    heroEvents();
    onAnimateElems();
  })
}

export default scrollEvents;