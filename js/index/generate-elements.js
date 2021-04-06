class GenerateElements {
  constructor(
    data,
    {
      modalTemplate,
      projectTemplate,
      infoTemplate,
      accTemplate,
      aboutMeTemplate,
      iconTemplate,
    }
  ) {
    this.data = data;
    this.modal = modalTemplate;
    this.project = projectTemplate;
    this.info = infoTemplate;
    this.accordeon = accTemplate;
    this.aboutMe = aboutMeTemplate;
    this.techIcon = iconTemplate;

    this.projectCollection = this.createProjectElements(
      this.data,
      this.project
    );
    this.infoCollection = this.createInfoElements(this.data, this.info);
    this.accordeonCollection = this.createAccordeonCollection(
      this.data,
      this.accordeon
    );
  }

  createAccordeonCollection(data, template) {
    return data.map((item) => {
      const accordeonElement = template.cloneNode(true);

      accordeonElement.setAttribute("data-info", item.id);
      accordeonElement.querySelector(".accordeon__button").textContent =
        item.techTask.term;
      accordeonElement.querySelector(".accordeon__def-content").innerHTML =
        item.techTask.definition;

      return accordeonElement;
    });
  }

  createIconCollection(data, template) {
    return data.map((iconSrc) => {
      const iconElement = template.cloneNode(true);

      iconElement.querySelector("img").src = `${iconSrc}`;

      return iconElement;
    });
  }

  createInfoElements(data, template) {
    return data.map((item) => {
      const infoElement = template.cloneNode(true);
      const iconCollection = this.createIconCollection(
        item.usedTech,
        this.techIcon
      );

      infoElement.setAttribute("data-info", item.id);
      infoElement.querySelector(".info__title").textContent = item.id;
      this.clearContainer(infoElement.querySelector(".info__tech-list"));
      this.renderElements(
        infoElement.querySelector(".info__tech-list"),
        iconCollection
      );
      infoElement.querySelector(".info__desc").textContent = item.description;
      infoElement.querySelector(".info__meta-time").textContent = item.leadTime;
      infoElement.querySelector(".info__meta-adaptive").textContent =
        item.isAdaptive;
      infoElement.querySelector(".info__diff").textContent = item.difficulty;
      infoElement
        .querySelector(".info__diff")
        .setAttribute("data-diff", item.difficulty);
      infoElement.querySelector(".info__link--work").href = item.url;
      infoElement.querySelector(
        ".info__link--work"
      ).textContent = `${item.id} Pages`;
      infoElement.querySelector(".info__link--git").href = item.repo;
      infoElement.querySelector(
        ".info__link--git"
      ).textContent = `${item.id} Github`;

      return infoElement;
    });
  }

  createProjectElements(data, template) {
    return data.map((item) => {
      const projectElement = template.cloneNode(true);
      projectElement.querySelector(".project__link").dataset.toggleaside =
        item.id;
      projectElement.querySelector(".project__link").title = item.id;
      projectElement.querySelector(".project__title").textContent = item.id;
      projectElement
        .querySelector(".project__icon use")
        .setAttribute("href", item.iconSrc);
      projectElement
        .querySelector(".project__icon")
        .setAttribute("width", item.iconSizes[0]);
      projectElement
        .querySelector(".project__icon")
        .setAttribute("height", item.iconSizes[1]);
      projectElement.querySelector(".project__link img").src = item.imageSrc;
      projectElement.querySelector(".project__link img").width =
        item.imageSizes[0];
      projectElement.querySelector(".project__link img").height =
        item.imageSizes[1];
      projectElement.querySelector(
        ".project__link img"
      ).alt = `Изображение главной страницы ${item.id}`;

      return projectElement;
    });
  }
}
