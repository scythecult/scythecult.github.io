class MenuToggler {
  constructor({ menu, burger, menuState, checkJs, mediaQuery }) {
    this._mql = window.matchMedia(mediaQuery);
    this._menu = menu;
    this._burger = burger;
    this._State = {
      menu: menuState,
      checkJs: checkJs,
    };
    this.boundClick = this.onButtonClick.bind(this);
    this.boundMql = this.onMqlChange.bind(this);

    this.checkJs();
    this.onMqlChange(this._mql);
    this._burger.addEventListener("click", this.boundClick);
    this._mql.addEventListener("change", this.boundMql);
  }

  onButtonClick(evt) {
    evt.preventDefault();
    this._menu.classList.toggle(this._State.menu);
  }

  checkJs() {
    this._menu.classList.remove(this._State.checkJs);
  }

  onMqlChange(evt) {
    if (evt.matches) {
      this._burger.removeEventListener("click", this.boundClick);
    } else {
      this._burger.addEventListener("click", this.boundClick);
    }
  }
}

const menuToggler = new MenuToggler({
  menu: document.querySelector(".navigation"),
  burger: document.querySelector(".burger"),
  menuState: "active",
  checkJs: "navigation-nojs",
  mediaQuery: "(min-width: 768px)",
});
