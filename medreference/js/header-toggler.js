"use strict";

(function () {
  const toggleButton = document.querySelector(".header__toggle");
  const buttonImage = document.querySelector(".header__toggle-icon");
  const menu = document.querySelector(".mobile-drop");

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("mobile-drop__showed");

    if (menu.classList.contains("mobile-drop__showed")) {
      buttonImage.src = "img/menu-cross.png";
    } else {
      buttonImage.src = "img/menu-menu.png";
    }
  });
})();
