class Toggler {
  constructor() {
    this._ToggleMap = {
      header: "header--active",
      promo: "promo--active",
      nojs: "header--nojs",
    };
    this._header = document.querySelector(".header");
    this._button = document.querySelector(".toggle-nav");
    this._promo = document.querySelector(".promo");
    this._mql = window.matchMedia("(min-width: 960px)");

    this.boundToggle = this.onButtonClick.bind(this);
    this.boundMql = this.onMqlChange.bind(this);

    this.checkJs();
    this._mql.addEventListener("change", this.boundMql);
    this.onMqlChange(this._mql);
  }

  onMqlChange(evt) {
    if (evt.matches) {
      this._button.removeEventListener("click", this.boundToggle);
      if (
        this._header.classList.contains(this._ToggleMap.header) ||
        this._promo.classList.contains(this._ToggleMap.promo)
      ) {
        this._header.classList.remove(this._ToggleMap.header);
        this._promo.classList.remove(this._ToggleMap.promo);
      }
    } else {
      this._button.addEventListener("click", this.boundToggle);
    }
  }

  onButtonClick(evt) {
    evt.preventDefault();
    this._header.classList.toggle(this._ToggleMap.header);
    this._promo.classList.toggle(this._ToggleMap.promo);
  }

  checkJs() {
    this._header.classList.remove(this._ToggleMap.nojs);
  }
}
new Toggler();
