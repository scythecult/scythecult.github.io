class Comments extends Dots {
  constructor(containerClass, commentsData) {
    super(containerClass);
    this.commentActive = "comment--active";
    this.commentsData = commentsData;
    this.commentsContainer = document.querySelector(".carousel__content");
    this.commentsRendered = this.commentsContainer.children;
    this.commentTemplate = document
      .querySelector("#comment")
      .content.querySelector(".comment");
    this.commentsCollection = this.createCommentCollection(
      this.commentTemplate,
      this.commentsData
    );
    this.dotsCollection = this.createDotCollection(
      this.dotTemplate,
      this.commentsData.length
    );
    utils.renderElements(this.commentsContainer, this.commentsCollection);
    utils.renderElements(this.dotsContainer, this.dotsCollection);
    utils.initActiveClass(this.commentsContainer.children, this.commentActive);
    utils.initActiveClass(this.dotsContainer.children, this.dotActive);

    this.boundCommentsDot = this.onDotClick.bind(this);
    this.dotsContainer.addEventListener("click", this.boundCommentsDot);
  }

  onDotClick(evt) {
    let dot = super.onDotClick(evt);

    utils.removeActiveClass(this.commentsRendered, this.commentActive);
    this.showCurrentComment(dot);
  }

  showCurrentComment(dot) {
    for (let comment of this.commentsContainer.children) {
      if (comment.dataset.id === dot.dataset.id) {
        comment.classList.add("comment--active");
      }
    }
  }

  createCommentCollection(commentTemplate, commentsData) {
    return commentsData.map((item, i) => {
      let commentElement = commentTemplate.cloneNode(true);

      commentElement.setAttribute("data-id", i);
      commentElement.querySelector(".comment__text").textContent = item.text;
      commentElement.querySelector(".comment__author").textContent =
        item.author;
      commentElement.querySelector(".comment__spec").textContent = item.spec;

      return commentElement;
    });
  }
}
