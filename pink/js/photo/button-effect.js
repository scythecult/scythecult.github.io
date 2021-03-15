class ButtonEffect extends SliderEffect {
  constructor() {
    super();
    this.setDataEffect();
    this.boundOnMousemove = this.onMousemove.bind(this);
    this.boundOnEffectButtonClick = this.onEffectButtonClick.bind(this);
    utils.effectsContainer.addEventListener("mousedown", this.boundOnMousemove);
    utils.effectsContainer.addEventListener(
      "click",
      this.boundOnEffectButtonClick
    );
  }
  onEffectButtonClick(evt) {
    const button = evt.target.closest(".effect__button");

    if (!button) return;

    const effectName = button.dataset.effect;
    utils.effectsContainer.removeEventListener(
      "mousedown",
      this.boundOnMousemove
    );
    utils.removeActiveClass(utils.effectButtons, utils.ActiveMap.button);
    this.addActiveClass(button, utils.ActiveMap.button);
    this.setDataEffect(effectName);
    this.removePrevEffect();

    utils.effectsContainer.addEventListener("mousedown", this.boundOnMousemove);
  }

  addActiveClass(element, className) {
    element.classList.add(className);
    element.focus();
  }

  setDataEffect(effectName = "scale") {
    this._preview.setAttribute("data-effect", effectName);
    utils.mobileSlide.setAttribute("data-effect", effectName);
  }

  removePrevEffect() {
    this._preview.removeAttribute("style");
  }
}

const buttonEffect = new ButtonEffect();
