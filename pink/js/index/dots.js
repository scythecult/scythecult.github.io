class Dots {
  constructor(containerClass) {
    this.dotsCount = 3;
    this.dotActive = "dots__dot--active";
    this.dotsContainer = document.querySelector(containerClass);
    this.dotTemplate = document
      .querySelector("#dot")
      .content.querySelector(".dots__dot");
  }

  onDotClick(evt) {
    evt.preventDefault();
    let dot = evt.target.closest(".dots__dot");

    if (!dot) return;

    utils.removeActiveClass(this.dotsContainer.children, this.dotActive);
    this.addDotActiveClass(dot, this.dotActive);

    return dot;
  }

  addDotActiveClass(dot, dotActive) {
    dot.classList.add(dotActive);
  }

  createDotCollection(dotTemplate, dotsCount) {
    let elementsCount = dotsCount <= 3 ? 3 : dotsCount;
    let collection = [];

    for (let i = 0; i < elementsCount; i++) {
      let dotElement = dotTemplate.cloneNode(true);

      dotElement.setAttribute("data-id", i);
      collection.push(dotElement);
    }

    return collection;
  }
}
