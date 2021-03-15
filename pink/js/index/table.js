class Table extends Dots {
  constructor(containerClass, table) {
    super(containerClass);
    this.table = document.querySelector(table);
    this.tableElementsCount = this.table.rows[0].cells.length - 1;
    this.dotsCollection = this.createDotCollection(
      this.dotTemplate,
      this.tableElementsCount
    );
    this.mql = window.matchMedia("(min-width: 660px)");

    utils.renderElements(this.dotsContainer, this.dotsCollection);
    utils.initActiveClass(this.dotsContainer.children, this.dotActive);
    this.boundMql = this.onMqlChange.bind(this);
    this.boundTableDot = this.setTablePosition.bind(this);
    this.mql.addEventListener("change", this.boundMql);
    this.onMqlChange(this.mql);
  }

  setTablePosition(evt) {
    let dot = super.onDotClick(evt);
    let tableWidth = this.table.offsetWidth;
    let cellWidth = tableWidth / this.tableElementsCount;
    let tableMul =
      dot.dataset.id === "0"
        ? 3
        : dot.dataset.id === "1"
        ? 2
        : dot.dataset.id === "2"
        ? 1
        : 0;

    this.table.style.transform = `translateX(-${
      tableWidth - cellWidth * tableMul
    }px)`;
  }

  onMqlChange(evt) {
    if (evt.matches) {
      this.dotsContainer.removeEventListener("click", this.boundTableDot);
      this.table.style.transform = `translateX(${0})`;
      this.table.removeAttribute("style");
    } else {
      this.dotsContainer.addEventListener("click", this.boundTableDot);
    }
  }
}

new Table(".offer__dots", ".plan");
