import { CompareMap } from "./utils.js";

const COMPARE_INIT_CLASS = "compare--init";
export const onButtonClick = (evt) => {
  const button = evt.target.closest(".compare__button");

  if (!button) return;
  toggleClass(CompareMap.compare, button, COMPARE_INIT_CLASS);
  removeStyle(CompareMap.picture);
  removeStyle(CompareMap.comparePin);
};

const toggleClass = (targetElement, toggler, className) => {
  switch (toggler.dataset.state) {
    case "before":
      targetElement.classList.remove(className);
      break;
    case "after":
      targetElement.classList.add(className);
      break;
  }
};

const removeStyle = (element) => {
  element.removeAttribute("style");
};
