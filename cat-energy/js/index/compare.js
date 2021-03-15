"use strict";

class Compare {
  constructor() {
    this.ValueMap = {
      MAX_PRECENT: 100,
    };
    this.sliderPin = document.querySelector(".compare__slide-button");
    this.slideRange = document.querySelector(".compare__range");
    this.progressBar = document.querySelector(".compare__progress-bar");
    this.photo = document.querySelector(".compare__image--before");
    this.controls = document.querySelector(".compare__controls");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.boundControls = this.onControlsClick.bind(this);
    this.boundSlide = this.onSlideMouseDown.bind(this);
    this.boundMql = this.mqlHandler.bind(this);

    this.controls.addEventListener("click", this.boundControls);
    this.sliderPin.addEventListener("mousedown", this.boundSlide);
    this.mql.addEventListener("change", this.boundMql);
    this.mqlHandler(this.mql);
  }

  mqlHandler(evt) {
    if (evt.matches) {
      this.setSliderDefaults();
    } else {
      this.setSliderDefaults();
    }
  }

  setSliderDefaults() {
    this.photo.style.width = `${this.ValueMap.MAX_PRECENT / 2}%`;
    this.sliderPin.style.left = `${this.slideRange.offsetWidth / 2}px`;
    this.progressBar.style.width = `${this.slideRange.offsetWidth / 2}px`;
  }

  onSlideMouseDown(evt) {
    evt.preventDefault();

    let start = new Coords(evt.clientX);

    const onMousemove = (moveEvt) => {
      moveEvt.preventDefault();
      let shift = new Coords(start.x - moveEvt.clientX);
      let pinCoordX = this.sliderPin.offsetLeft - shift.x;
      start = new Coords(moveEvt.clientX);

      if (
        !(
          pinCoordX < 0 ||
          pinCoordX > this.slideRange.offsetWidth - this.sliderPin.offsetWidth
        )
      ) {
        let pinPoint = pinCoordX / this.slideRange.offsetWidth;

        this.sliderPin.style.left = `${this.sliderPin.offsetLeft - shift.x}px`;
        this.progressBar.style.width = `${
          this.sliderPin.offsetLeft - shift.x
        }px`;
        this.photo.style.width = `${Math.round(
          pinPoint * this.ValueMap.MAX_PRECENT
        )}%`;
      }
    };

    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mousemove", onMouseup);
    };

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);

    function Coords(x) {
      this.x = x;
    }
  }

  onControlsClick(evt) {
    evt.preventDefault();

    let before = evt.target.closest(".compare__text--before");
    let after = evt.target.closest(".compare__text--after");

    if (!before && !after) return;

    if (before) {
      this.setBeforeStatement();
    }

    if (after) {
      this.setAfterStatement();
    }
  }

  setBeforeStatement() {
    this.photo.style.width = `${0}%`;
    this.sliderPin.style.left = `${0}px`;
    this.progressBar.style.width = `${0}px`;
  }

  setAfterStatement() {
    this.photo.style.width = `${this.ValueMap.MAX_PRECENT}%`;
    this.sliderPin.style.left = `${
      this.slideRange.offsetWidth - this.sliderPin.offsetWidth
    }px`;
    this.progressBar.style.width = `${
      this.slideRange.offsetWidth - this.sliderPin.offsetWidth
    }px`;
  }
}

let compare = new Compare();
