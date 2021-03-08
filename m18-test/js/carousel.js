class Carousel {
  constructor({ carouselContainer, carousel, carouselElements, states }) {
    this._Slide = {
      START: 0,
      POSITION: 1,
    };
    this._carouselContainer = carouselContainer;
    this._carousel = carousel;
    this._carouselElements = carouselElements;
    this._States = states;
    this.counter = this.makeCounter();
    this.increaser = this.makeCounter();
    this.currentValue = this.getCurrentValue(
      this._States.current,
      this._carouselElements
    );
    this.counter.set(this.currentValue);

    this.boundButtonsClick = this.onButtonsClick.bind(this);
    this._carouselContainer.addEventListener("click", this.boundButtonsClick);
  }

  onButtonsClick(evt) {
    const Buttons = {
      prev: evt.target.closest(".slide-button-prev"),
      next: evt.target.closest(".slide-button-next"),
    };

    if (!Buttons.prev && !Buttons.next) return;

    if (Buttons.prev) {
      this.clearClassName(this._States.next);
      this.clearClassName(this._States.prev);
      this.clearClassName(this._States.current);
      this.getPrevSlide(this._States.current);
    }

    if (Buttons.next) {
      this.clearClassName(this._States.next);
      this.clearClassName(this._States.prev);
      this.clearClassName(this._States.current);
      this.getNextSlide(this._States.current);
    }
  }

  getNextSlide(name) {
    this.increaser.set(this.counter() - this._Slide.POSITION);
    if (this.counter() >= this._carouselElements.length - 1) {
      this._carouselElements[this.counter.set(this._Slide.START)].classList.add(
        name
      );
      this._carouselElements[
        this.increaser.set(this._carouselElements.length - 1)
      ].classList.add(this._States.prev);
    } else {
      this._carouselElements[this.counter.inc()].classList.add(name);
      this._carouselElements[this.increaser.inc()].classList.add(
        this._States.prev
      );
    }
  }

  getPrevSlide(name) {
    this.increaser.set(this.counter() + this._Slide.POSITION);
    if (this.counter() <= 0) {
      this._carouselElements[
        this.counter.set(this._carouselElements.length - 1)
      ].classList.add(name);
      this._carouselElements[
        this.increaser.set(this._Slide.START)
      ].classList.add(this._States.next);
    } else {
      this._carouselElements[this.increaser.dec()].classList.add(
        this._States.next
      );
      this._carouselElements[this.counter.dec()].classList.add(name);
    }
  }

  clearClassName(name, elements = this._carouselElements) {
    for (const elem of elements) {
      elem.removeAttribute("class");

      if (elem.classList.contains(name)) {
        elem.classList.remove(name);
      }
    }
  }

  getCurrentValue(state, elements) {
    let current;
    for (const elem of elements) {
      if (elem.classList.contains(state)) {
        current = elem;
      }
    }
    return Array.from(elements).indexOf(current);
  }

  makeCounter() {
    let count = 0;
    const counter = () => {
      return count;
    };

    counter.inc = () => ++count;
    counter.dec = () => --count;
    counter.set = (value) => (count = value);
    return counter;
  }
}

const carousel = new Carousel({
  carouselContainer: document.querySelector(".carousel"),
  carousel: document.querySelector(".carousel-list"),
  carouselElements: document.querySelectorAll(".carousel-list li"),
  states: {
    current: "current",
    prev: "prev",
    next: "next",
  },
});
