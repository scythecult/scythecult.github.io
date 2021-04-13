class Carousel {
  constructor(container) {
    this.container = container;
    this._photoCountFrom = this.container.querySelector(".work-gallery__from");
    this._photoCountTo = this.container.querySelector(".work-gallery__to");
    this._photosContainer = this.container.querySelector(
      ".work-gallery__carousel"
    );
    this._photoElements = this.container.querySelector(
      ".work-gallery__carousel"
    ).children;
    this._controlsContainer = this.container.querySelector(
      ".work-gallery__controls"
    );
    this._CONSTS = {
      COUNTER_START: 1,
      PHOTO_LENGTH: this._photoElements.length,
      PHOTO_ACTIVE: "work-gallery__active",
      CONTROL_CURRENT: "work-gallery__control--current",
    };
    this._photo = {
      counter: 1,
    };
    this.controlElementCollection = this.createControlElements(
      this._CONSTS.PHOTO_LENGTH
    );
    this.controlElements;

    this.init();
    this.initListeners();
  }

  init() {
    this.setCounterStartValue();
    this.clearContainer(this._controlsContainer);
    this.render(this._controlsContainer, this.controlElementCollection);
    this.controlElements = this.container.querySelectorAll(
      ".work-gallery__control"
    );
    const photoFirstElement = this._photoElements[0];
    const controlFirstElement = this.controlElements[0];
    this.addClassName(photoFirstElement, this._CONSTS.PHOTO_ACTIVE);
    this.addClassName(controlFirstElement, this._CONSTS.CONTROL_CURRENT);
    this.setDataIdAttribute(this._photoElements);
    this.setDataIdAttribute(this.controlElements);
  }

  initListeners() {
    const onDotClick = (evt) => {
      evt.preventDefault();
      const dot = evt.target.closest(".work-gallery__control");

      if (!dot) return;
      if (dot) {
        const dotID = parseInt(dot.dataset.id, 10);
        this.clearElementsClassName(
          this.controlElements,
          this._CONSTS.CONTROL_CURRENT
        );
        this.addClassName(dot, this._CONSTS.CONTROL_CURRENT);
        const sameClickedElement = this.getClickedById(
          this._photoElements,
          dot
        );
        this.clearElementsClassName(
          this._photoElements,
          this._CONSTS.PHOTO_ACTIVE
        );
        this.addClassName(sameClickedElement, this._CONSTS.PHOTO_ACTIVE);
        this.setCounterValue(dotID + 1);
        this._photo.counter = dotID + 1;
      }
    };

    const onPhotoClick = (evt) => {
      evt.preventDefault();
      const pictureElement = evt.target.closest("li");
      const getNextPicture = () => {
        if (this._photo.counter >= this._CONSTS.PHOTO_LENGTH) {
          this._photo.counter = 0;
        }

        this.clearElementsClassName(
          this.controlElements,
          this._CONSTS.CONTROL_CURRENT
        );

        this.controlElements[this._photo.counter].classList.add(
          this._CONSTS.CONTROL_CURRENT
        );

        this._photoElements[this._photo.counter++].classList.add(
          this._CONSTS.PHOTO_ACTIVE
        );
      };
      if (!pictureElement) return;
      if (pictureElement) {
        this.clearElementsClassName(
          this._photoElements,
          this._CONSTS.PHOTO_ACTIVE
        );
        getNextPicture();
        this.setCounterValue(this._photo.counter);
      }
    };

    this._photosContainer.addEventListener("click", onPhotoClick);
    this._controlsContainer.addEventListener("click", onDotClick);
  }

  setCounterValue(incElement) {
    const parsedId = parseInt(incElement, 10);
    this._photoCountFrom.textContent = `${parsedId}`;
  }

  setCounterStartValue() {
    this._photoCountFrom.textContent = `${this._CONSTS.COUNTER_START}`;
    this._photoCountTo.textContent = `${this._CONSTS.PHOTO_LENGTH}`;
  }

  getClickedById(collection, clicked) {
    return Array.from(collection).find(
      (element) => element.dataset.id === clicked.dataset.id
    );
  }

  clearElementsClassName(elements, className) {
    for (const element of elements) {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    }
  }

  addClassName(element, className) {
    element.classList.add(className);
  }

  render(container, markup, where = "beforeend") {
    container.insertAdjacentHTML(where, markup);
  }

  clearContainer(container) {
    container.innerHTML = "";
  }

  createControlElements(count) {
    return new Array(count)
      .fill("")
      .map((element) => (element = this.controlMarkup()))
      .join("\n");
  }

  controlMarkup() {
    return `
    <li>
    <button class="work-gallery__control" type="button"><span
    class="visually-hidden">Переключение
    слайда</span></button>
    </li>
    `;
  }

  setDataIdAttribute(elements) {
    let index = 0;
    for (const element of elements) {
      element.setAttribute(`data-id`, `${index++}`);
    }
  }
}

const settings = {
  dried: document.querySelector(".work-gallery.work-gallery--dried"),
  compose: document.querySelector(".work-gallery.work-gallery--compose"),
  eatable: document.querySelector(".work-gallery.work-gallery--eatable"),
  regular: document.querySelector(".work-gallery.work-gallery--regular"),
};

new Carousel(settings.dried);
new Carousel(settings.compose);
new Carousel(settings.eatable);
new Carousel(settings.regular);
