"use strict";let menuBtn=document.querySelector(".menu-btn"),menu=document.querySelector(".header-list");function clicked(){menuBtn.classList.toggle("active"),menu.classList.toggle("active"),menuBtn.classList.contains("active")?hideScroll():showScroll()}menuBtn.addEventListener("click",clicked),menu.addEventListener("click",clicked);const hideScroll=()=>{const e=`${getScrollbarWidth()}px`;document.body.style.paddingRight=e,document.body.style.overflow="hidden",document.getElementById("menu-btn").style.paddingRight=e},showScroll=()=>{document.body.style.paddingRight="",document.body.style.overflow="visible",document.getElementById("menu-btn").style.paddingRight=""},resetNav=()=>{document.querySelector(".menu-btn").classList.remove("active"),document.querySelector(".header-list").classList.remove("active"),showScroll()};window.addEventListener("resize",resetNav);const getScrollbarWidth=()=>{const e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",e.style.visibility="hidden",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t};let lists=document.querySelectorAll(".menu-lists__list-item");function onTabClick(e){e.addEventListener("click",function(t){let i=e.getAttribute("data-tab");document.querySelector(i).classList.toggle("swiper-block--active"),t.preventDefault()})}lists.forEach(onTabClick),new Swiper(".swiper",{loop:!0,slidesPerView:4,breakpointsInverse:!0,breakpoints:{0:{slidesPerView:1},470:{slidesPerView:2},684:{slidesPerView:3},912:{slidesPerView:4}}}),new Swiper(".swiper-gallery",{loop:!0,freeMode:!0,slidesPerView:4,breakpointsInverse:!0,breakpoints:{0:{slidesPerView:1},420:{slidesPerView:2},800:{slidesPerView:3},912:{slidesPerView:4}}});