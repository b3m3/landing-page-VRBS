import Swiper, { Autoplay } from 'swiper';
import { rainbowCursor } from "cursor-effects";
import Scrollbar from 'smooth-scrollbar';

import cursor from "./modules/cursor.js";
import scrollEvents from "./modules/scrollEvents.js";
import video from "./modules/video.js";
import accordion from './modules/accordion.js';
import moveEllipses from "./modules/moveEllipses.js";
import menu from './modules/menu.js';
import subscribe from "./modules/subscribe.js";

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const wrapper = document.querySelector('.wrapper');

  const swiper = new Swiper('.swiper', {
    loop: true,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      475: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  if (window.ontouchstart === undefined) {
    cursor(rainbowCursor);
  }

  scrollEvents(Scrollbar, wrapper);
  video();
  accordion();
  moveEllipses();
  menu();
  subscribe();
});