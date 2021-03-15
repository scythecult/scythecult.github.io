class PhotoUpload {
  constructor() {
    this._form = document.querySelector(".upload-app__form");
    this._input = this._form.elements.filename;
    this._preview = document.querySelector(".upload-photo__preview");
    this.boundFileinput = this.onFileinputChange.bind(this);
    this.boundOnResetClick = this.onResetClick.bind(this);
    this._input.addEventListener("change", this.boundFileinput);
    this._form.addEventListener("reset", this.boundOnResetClick);
  }

  onResetClick(evt) {
    evt.preventDefault();
    this._preview.removeAttribute("style");
    this.setDataEffect();
    utils.mobileSlide.style.left = `${50}%`;
    utils.removeActiveClass(utils.effectButtons, utils.ActiveMap.button);
    utils.effectButtons[0].classList.add(utils.ActiveMap.button);
  }

  onFileinputChange(evt) {
    const picturePath = URL.createObjectURL(this._input.files[0]);
    this._preview.src = picturePath;
    evt.target.value = "";
    const onPreviewLoad = () => {
      URL.revokeObjectURL(picturePath);

      this._preview.removeEventListener("load", onPreviewLoad);
    };

    this._preview.addEventListener("load", onPreviewLoad);
  }
}
