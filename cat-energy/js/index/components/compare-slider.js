import { CompareMap } from "./utils.js";

const MAX_WIDTH_VALUE = 100;
const PAD = 5;
const Coords = function (x) {
  this.x = x;
};

export const onPinMousedown = (evt) => {
  evt.preventDefault();
  const pin = evt.target.closest(".compare__pin");

  if (!pin) return;
  const startCoords = new Coords(evt.clientX);
  const onPinMousemove = (moveEvt) => {
    const shift = new Coords(startCoords.x - moveEvt.clientX);
    const pinX = pin.offsetLeft - shift.x;
    const proportion = Math.round(
      MAX_WIDTH_VALUE -
        (pinX / (CompareMap.sliderBar.offsetWidth - pin.offsetWidth)) *
          MAX_WIDTH_VALUE
    );

    startCoords.x = moveEvt.clientX;

    if (
      !(
        pinX < PAD ||
        pinX > CompareMap.sliderBar.offsetWidth - pin.offsetWidth - PAD
      )
    ) {
      pin.style.left = `${pin.offsetLeft - shift.x}px`;
      CompareMap.picture.style.width = `${proportion}%`;
    }
  };

  const onPinMouseup = () => {
    document.removeEventListener("mousemove", onPinMousemove);
    document.removeEventListener("mouseup", onPinMouseup);
  };

  document.addEventListener("mousemove", onPinMousemove);
  document.addEventListener("mouseup", onPinMouseup);
};
