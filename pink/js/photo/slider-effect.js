class SliderEffect extends PhotoUpload {
  constructor() {
    super();
    this.Effects = {
      DEFAULT_EFFECT_LEVEL: 100,
      MAX_SCALE_VALUE: 5,
      MAX_GRAYSCALE_VALUE: 1,
      MAX_CONTRAST_VALUE: 3,
    };
  }

  onMousemove(evt) {
    evt.preventDefault();
    const control = evt.target.closest(".effect__slider-control");

    if (!control) return;

    const controlEffectName = control.dataset.effect;
    this.setDataEffect(controlEffectName);
    const previewEffectName = this._preview.dataset.effect;
    const startCoords = new Coords(evt.clientX);

    const onMousemove = (moveEvt) => {
      const shift = new Coords(startCoords.x - moveEvt.clientX);
      const pinCoords = control.offsetLeft - shift.x;
      const proportion = Math.round(
        (pinCoords /
          (control.parentElement.offsetWidth - control.offsetWidth)) *
          this.Effects.DEFAULT_EFFECT_LEVEL
      );
      this.setInputValue(proportion);
      const restrictRange = () => {
        const coords = {
          left: control.offsetLeft,
          controlWidth: control.offsetWidth,
          barWidth: control.parentElement.offsetWidth,
        };
        if (coords.left < 0) {
          control.style.left = `${0}px`;
        }
        if (coords.left + coords.controlWidth > coords.barWidth) {
          control.style.left = `${coords.barWidth - coords.controlWidth}px`;
        }
      };
      startCoords.x = moveEvt.clientX;

      this.setEffectDepth(previewEffectName, proportion);
      restrictRange();
      control.style.left = `${control.offsetLeft - shift.x}px`;
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseUp);

    function Coords(x) {
      this.x = x;
    }
  }

  setInputValue(value) {
    this._input.setAttribute("value", value);
  }

  setEffectDepth(effectName, levelValue) {
    const prop = Math.abs(levelValue / this.Effects.DEFAULT_EFFECT_LEVEL);
    switch (effectName) {
      case "scale":
        this._preview.style = `transform: scale(${prop})`;
        break;
      case "grayscale":
        this._preview.style = `filter: grayscale(${
          this.Effects.MAX_GRAYSCALE_VALUE * prop
        })`;
        break;
      case "contrast":
        this._preview.style = `filter: contrast(${
          this.Effects.MAX_CONTRAST_VALUE * prop
        })`;
        break;
      default:
        this._preview.removeAttribute("style");
    }
  }
}
