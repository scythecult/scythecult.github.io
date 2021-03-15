class Utils {
  constructor() {
    this.ActiveMap = {
      button: "effect__button--active",
    };
    this.effectButtons = document.querySelectorAll(".effect__button");
    this.effectsContainer = document.querySelector(".upload-app__effects");
    this.mobileSlide = document.querySelector(
      ".upload-app__effect--m-only .effect__slider-control"
    );
  }

  initActiveClass(elements, className, position = 0) {
    if (!elements[position].classList.contains(className)) {
      !elements[position].classList.add(className);
    }
  }

  removeActiveClass(elements, activeClass) {
    for (let element of elements) {
      if (element.classList.contains(activeClass)) {
        element.classList.remove(activeClass);
      }
    }
  }

  removePrevElements(container) {
    container.innerHTML = "";
  }

  renderElements(container, elements) {
    this.removePrevElements(container);
    container.append(...elements);
  }
}

const utils = new Utils();
