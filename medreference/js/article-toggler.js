"use strict";

(function () {
  const moreButton = document.querySelector(".ref-info__more");
  const hiddenText = document.querySelector(".ref-info__hidden");
  const dots = document.querySelector(".ref-info__dots");
  const lessButton = document.querySelector(".ref-info__less");

  moreButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (!moreButton.classList.contains("ref-info__more--hidden")) {
      moreButton.classList.add("ref-info__more--hidden");
      hiddenText.classList.add("ref-info__hidden--showed");
      dots.classList.add("ref-info__dots--hidden");
    }

    if (moreButton.classList.contains("ref-info__more--hidden")) {
      lessButton.classList.add("ref-info__less--show");

      lessButton.addEventListener("click", (evt) => {
        evt.preventDefault();

        lessButton.classList.remove("ref-info__less--show");
        moreButton.classList.remove("ref-info__more--hidden");
        hiddenText.classList.remove("ref-info__hidden--showed");
        dots.classList.remove("ref-info__dots--hidden");
      });
    }
  });
})();
