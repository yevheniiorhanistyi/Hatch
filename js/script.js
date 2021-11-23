(function() {
 'use strict';

var goTop = document.querySelector('.toTop');

window.addEventListener('scroll', trackScroll);


function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > 500) {
      goTop.classList.add('active');
    }
    if (scrolled < 500) {
      goTop.classList.remove('active');
    }
  }


})();


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-list');

  menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

  menu.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
