"use strict";

let headerSliderData = {
  sliderButtons: ".slider__bullet",
  sliderControlsArea: ".slider__controls",
  sliderItems: ".slider__item",
  sliderItemCurrent: "slider__item--current",
  sliderButtonCurrent: "slider__bullet--current",
  sliderButtonCheck: "slider__bullet",
  background: ".page__body",
  firstButtonCase: "page__body page__body__slide--1",
  secondButtonCase: "page__body page__body__slide--2",
  thirdButtonCase: "page__body page__body__slide--3",
};

function BulletSlider({
  sliderButtons,
  sliderControlsArea,
  sliderItems,
  sliderItemCurrent,
  sliderButtonCurrent,
  sliderButtonCheck,
  background,
  firstButtonCase,
  secondButtonCase,
  thirdButtonCase,
} = {}) {
  let index = 0;

  sliderControlsArea = document.querySelector(sliderControlsArea);
  sliderItems = document.querySelectorAll(sliderItems);
  sliderButtons = document.querySelectorAll(sliderButtons);

  // Частный случай
  background = document.querySelector(background) || null;
  firstButtonCase = firstButtonCase || null;
  secondButtonCase = secondButtonCase || null;
  thirdButtonCase = thirdButtonCase || null;

  this.clearSlideClass = function () {
    for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove(sliderItemCurrent);
    }
  };

  this.clearButtonClass = function () {
    for (let i = 0; i < sliderButtons.length; i++) {
      sliderButtons[i].classList.remove(sliderButtonCurrent);
    }
  };

  this.showSlides = function (n) {
    if (n < 0) index = sliderItems.length;
    if (n >= sliderItems.length) index = 0;

    this.clearSlideClass();
    this.clearButtonClass();

    sliderItems[index].classList.add(sliderItemCurrent);
    sliderButtons[index].classList.add(sliderButtonCurrent);
  };

  this.showSlides(index);

  this.currentSlide = function (n) {
    this.showSlides((index = n));
  };

  sliderControlsArea.onclick = (evt) => {
    for (let i = 0; i < sliderButtons.length; i++) {
      if (
        evt.target.classList.contains(sliderButtonCheck) &&
        evt.target === sliderButtons[i]
      ) {
        this.currentSlide(i);

        switch (sliderButtons[i].dataset.button) {
          case "button1":
            background.className = firstButtonCase;
            break;
          case "button2":
            background.className = secondButtonCase;
            break;
          case "button3":
            background.className = thirdButtonCase;
            break;
        }
      }
    }
  };
}

new BulletSlider(headerSliderData);
