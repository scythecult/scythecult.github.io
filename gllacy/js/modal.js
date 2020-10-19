"use strict";
(function () {
  let modal = document.querySelector(".modal-feedback");
  let opentButton = document.querySelector(".adress__feedback-button");
  let closeModal = modal.querySelector(".modal-feedback__close-button");

  opentButton.onclick = function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-feedback--show");
  };

  closeModal.onclick = function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-feedback--show");
  };

  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      modal.classList.remove("modal-feedback--show");
    }
  });
})();
