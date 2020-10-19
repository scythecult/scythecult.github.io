"use strict";

// (function () {
//   let position = 0;
//   let slidesToShow = 1;
//   const slideToScroll = 1;
//   const container = document.querySelector('.advantages__wrap');
//   const sliderTrack = container.querySelector('.carousel-adv');
//   const sliderItems = sliderTrack.querySelectorAll('.carousel-adv__item');

//   const btnPrev = container.querySelector('.advantages__button--prev');
//   const btnNext = container.querySelector('.advantages__button--next');

//   const itemWidth = container.offsetWidth / slidesToShow;
//   const movePosition = slideToScroll * itemWidth;

//   for (let item of sliderItems) {
//     item.style.minWidth = itemWidth + 'px';
//   }

//   btnPrev.addEventListener('click', () => {
//     position += movePosition;
//     setPosition();
//     checkButtons();
//   });
//   btnNext.addEventListener('click', () => {
//     const itemsLeft = sliderItems.length - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//     position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
//     setPosition();
//     checkButtons();
//   });

//   function setPosition() {
//     sliderTrack.style.transform = `translateX(${position}px)`;
//   }

//   function checkButtons() {
//     if (position === 0) {
//       btnPrev.disabled = true;
//     } else {
//       btnPrev.disabled = false;
//     }

//     if (position <= -(sliderItems.length - slidesToShow) * itemWidth) {
//       btnNext.disabled = true;
//     } else {
//       btnNext.disabled = false;
//     }
//   }
//   checkButtons();
// })();
