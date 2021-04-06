class Listeners extends RenderElements {
  constructor(data, elements, { projectsContainer }) {
    super(data, elements);
    this.projectsContainer = projectsContainer;
    this.infoContainer = this.modal.querySelector(".modal__content");

    this.clearContainer(this.projectsContainer);
    this.renderElements(this.projectsContainer, this.projectCollection);
    this.renderElements(this.projectsContainer, this.modal);
    this.boundOnDocumentClick = this.onDocumentClick.bind(this);
    this.boundOnDocumentKeydown = this.onDocumentKeydown.bind(this);
    document.addEventListener("click", this.boundOnDocumentClick);
  }

  onDocumentClick(evt) {
    const Elements = {
      project: evt.target.closest(".project__link"),
      modal: evt.target.closest(".modal"),
      accButton: evt.target.closest(".accordeon__button"),
      aboutMe: evt.target.closest(".site-list__link--about"),
    };

    if (
      !Elements.project &&
      !Elements.modal &&
      !Elements.accButton &&
      !Elements.aboutMe
    ) {
      return;
    }

    if (Elements.aboutMe) {
      evt.preventDefault();
      this.showModal();
      this.renderElements(this.infoContainer, this.aboutMe);
    }

    if (Elements.project) {
      evt.preventDefault();
      this.showModal();
      this.renderModalInfo(
        this.infoCollection,
        Elements.project,
        this.infoContainer
      );

      const accordeon = this.modal.querySelector(".accordeon");

      this.renderModalInfo(
        this.accordeonCollection,
        Elements.project,
        accordeon
      );
    }

    if (Elements.modal) {
      this.closeModal(evt);
    }

    if (Elements.accButton) {
      this.accordeonToggle(Elements.accButton);
    }
  }

  onDocumentKeydown(evt) {
    if (evt.key === "Escape") {
      this.clearModal();
    }
  }

  accordeonToggle(button) {
    const content = button.parentElement.nextElementSibling;
    const defContentHeight = content.querySelector(".accordeon__def-content")
      .offsetHeight;
    content.classList.toggle("accordeon__def--show");

    if (content.classList.contains("accordeon__def--show")) {
      content.style.height = `${defContentHeight}px`;
    } else {
      content.style.height = `${0}px`;
    }
  }

  showModal() {
    this.modal.classList.add("modal--show");
    this.infoContainer.classList.add("modal__content--show");
    this.infoContainer.focus();
    document.addEventListener("keydown", this.boundOnDocumentKeydown);
  }

  closeModal(evt) {
    const { target } = evt;
    if (
      target.dataset.overlay !== undefined ||
      target.dataset.closemodal !== undefined
    ) {
      this.clearModal();
    }
  }

  clearModal() {
    this.modal.classList.remove("modal--show");
    this.infoContainer.classList.remove("modal__content--show");
    this.clearContainer(this.infoContainer);
    this.projectsContainer.firstElementChild.firstElementChild.focus();
    document.removeEventListener("keydown", this.boundOnDocumentKeydown);
  }
}

const listeners = new Listeners(
  dataProjectTemplate,
  elements,
  contentContainers
);
