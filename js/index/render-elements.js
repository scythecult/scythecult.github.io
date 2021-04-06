class RenderElements extends GenerateElements {
  constructor(data, elements) {
    super(data, elements);
  }

  renderModalInfo(infoElements, id, container) {
    return infoElements.find((infoElement) =>
      infoElement.dataset.info === id.dataset.toggleaside
        ? this.renderElements(container, infoElement)
        : null
    );
  }

  renderElements(container, elements) {
    if (elements.length >= 1) {
      container.append(...elements);
    } else {
      container.append(elements);
    }
  }

  clearContainer(container) {
    container.innerHTML = "";
  }
}
