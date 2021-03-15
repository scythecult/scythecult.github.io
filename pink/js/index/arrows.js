class Arrows extends Comments {
  constructor(containerClass, commentsData) {
    super(containerClass, commentsData);
    this.arrowContiner = document.querySelector(".carousel__controls");
    this.mql = window.matchMedia("(min-width: 960px)");
    this.counter = this.makeCounter();
    this.boundMql = this.onMqlChange.bind(this);
    this.boundArrowClick = this.onArrowClick.bind(this);
    this.mql.addEventListener("change", this.boundMql);

    this.onMqlChange(this.mql);
  }

  onArrowClick(evt) {
    evt.preventDefault();
    let arrow = evt.target.closest(".arrow");
    if (!arrow) return;

    let Arrow = {
      prev: arrow.classList.contains("arrow--prev"),
      next: arrow.classList.contains("arrow--next"),
    };

    let checkPrevButton = () => {
      if (this.counter.get() <= 0) {
        this.commentsRendered[0].classList.add("comment--active");
      } else {
        this.commentsRendered[this.counter.dec()].classList.add(
          "comment--active"
        );
      }
    };
    let checkNextButton = () => {
      if (this.counter.get() >= this.commentsRendered.length - 1) {
        this.commentsRendered[this.commentsRendered.length - 1].classList.add(
          "comment--active"
        );
      } else {
        this.commentsRendered[this.counter.inc()].classList.add(
          "comment--active"
        );
      }
    };

    utils.removeActiveClass(this.commentsRendered, this.commentActive);

    if (Arrow.prev) {
      checkPrevButton();
    }

    if (Arrow.next) {
      checkNextButton();
    }
  }

  onMqlChange(evt) {
    if (evt.matches) {
      this.arrowContiner.addEventListener("click", this.boundArrowClick);
      this.dotsContainer.removeEventListener("click", this.boundCommentsDot);
      this.arrowContiner.addEventListener("click", this.boundArrowClick);
    } else {
      this.arrowContiner.removeEventListener("click", this.boundArrowClick);
      this.dotsContainer.addEventListener("click", this.boundCommentsDot);
      this.arrowContiner.removeEventListener("click", this.boundArrowClick);
    }
  }

  makeCounter() {
    function counter() {
      return counter.count;
    }
    counter.inc = () => ++counter.count;
    counter.dec = () => --counter.count;
    counter.set = (value) => (counter.count = value);
    counter.get = () => counter.count;
    counter.count = 0;

    return counter;
  }
}

let arrows = new Arrows(".carousel__dots", commentsData);
