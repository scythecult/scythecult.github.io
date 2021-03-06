class Form {
  constructor() {
    this._form = document.querySelector(".form");
    this._modalTemplate = document
      .querySelector("#modal")
      .content.querySelector(".modal");
    this.boundModalKeydown = this.onModalKeydown.bind(this);
    this.boundFormSubmit = this.onFormSubmit.bind(this);
    this.boundAddModalHandler = this.addModalHandler.bind(this);

    this._form.addEventListener("submit", this.boundFormSubmit);
  }

  onModalKeydown(evt) {
    if (evt.key === "Escape") {
      this._modalTemplate.classList.remove("modal-show");
      document.removeEventListener("keydown", this.boundModalKeydown);
    }
  }
  addModalHandler(element) {
    element.addEventListener("keydown", this.boundModalKeydown);
  }
  renderModal() {
    return new Promise((resolve) => {
      document.body.append(this._modalTemplate);
      this._modalTemplate.classList.add("modal-show");
      resolve(document);
    });
  }
  onFormSubmit(evt) {
    const Input = {
      fullname: this._form.elements[0].elements[0],
      email: this._form.elements[0].elements[1],
      phone: this._form.elements[0].elements[2],
    };

    if (
      Input.fullname.validity.valid &&
      Input.email.validity.valid &&
      Input.phone.validity.valid
    ) {
      evt.preventDefault();
      // отправляем данные на сервер, рисуем модальное окно
      this.renderModal().then(this.boundAddModalHandler);
      this._form.reset();
    }
  }
}

const form = new Form();
