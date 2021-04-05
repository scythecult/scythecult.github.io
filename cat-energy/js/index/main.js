import { CompareMap } from "./components/utils.js";
import { COMPARE_METRICS } from "./components/utils.js";
import { onButtonClick } from "./components/compare-toggle.js";
import { onPinMousedown } from "./components/compare-slider.js";

const MQL_MIN_WIDTH = "(min-width: 768px)";
const mql = window.matchMedia(MQL_MIN_WIDTH);
const setPinDefaults = (pinPosition, pictureWidth) => {
  CompareMap.comparePin.style.left = `${pinPosition}%`;
  CompareMap.picture.style.width = `${pictureWidth}%`;
};

const onMqlChange = (query) => {
  if (query.matches) {
    setPinDefaults(
      COMPARE_METRICS.PIN_DESKTOP_POSITION,
      COMPARE_METRICS.PICTURE_DESKTOP_WIDTH
    );
    CompareMap.compareControls.addEventListener("mousedown", onPinMousedown);
  } else {
    setPinDefaults(
      COMPARE_METRICS.PIN_MOBILE_POSITION,
      COMPARE_METRICS.PICTURE_MOBILE_WIDTH
    );
    CompareMap.compareControls.removeEventListener("mousedown", onPinMousedown);
  }
};

onMqlChange(mql);
mql.addEventListener("change", onMqlChange);
CompareMap.compareControls.addEventListener("click", onButtonClick);
