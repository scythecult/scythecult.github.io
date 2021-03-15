"use strict";

class HeaderToggler {
  constructor({ toggle, menu }) {
    this.toggleButton = toggle;
    this.menu = menu;
    this.boundOnClickMenu = this.onClickMenu.bind(this);

    this.toggleButton.addEventListener("click", this.boundOnClickMenu);
    this.checkHeaderJS();
  }

  onClickMenu() {
    this.toggleButton.classList.toggle("header__toggle--open");
    this.menu.classList.toggle("nav--closed");
  }

  checkHeaderJS() {
    if (this.menu.classList.contains("nav--nojs")) {
      this.menu.classList.remove("nav--nojs");
      this.menu.classList.add("nav--closed");
      this.toggleButton.classList.remove("header__toggle--open");
      this.toggleButton.classList.remove("header__toggle--noevt");
    }
  }
}

let headerToggler = new HeaderToggler({
  toggle: document.querySelector(".header__toggle"),
  menu: document.querySelector(".nav"),
});
