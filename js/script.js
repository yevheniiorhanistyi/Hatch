"use strict";

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-list');

menuBtn.addEventListener('click', clickedMenuBtn);
menu.addEventListener('click', clicked);

function clicked() {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  showScroll();
}

function clickedMenuBtn() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  if (menuBtn.classList.contains('active')) {
    hideScroll();
  }
  else {
    showScroll();
  }

}

const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
  document.getElementById('menu-btn').style.paddingRight = scrollWidth;
};
const showScroll = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
  document.getElementById('menu-btn').style.paddingRight = '';
};

const resetNav = () => {
  document.querySelector('.menu-btn').classList.remove('active');
  document.querySelector('.header-list').classList.remove('active');
  showScroll();
};

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {

  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';

  document.body.appendChild(outer);
  const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollbarWidth;
};

// box-menu; menu-items

let lists = document.querySelectorAll('.menu-lists__list-item');

lists.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function (event) {
    let currentLink = item;
    let tabId = currentLink.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    currentTab.classList.toggle('swiper-block--active');
    event.preventDefault();
  });
}
// slider

new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  breakpointsInverse: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    470: {
      slidesPerView: 2,
    },

    684: {
      slidesPerView: 3,
    },

    912: {
      slidesPerView: 4,
    },

  }
});

new Swiper('.swiper-gallery', {
  loop: true,
  freeMode: true,
  slidesPerView: 4,
  breakpointsInverse: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    420: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 3,
    },

    912: {
      slidesPerView: 4,
    },

  }
});

