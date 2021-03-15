class Ymap {
  constructor() {
    this.map = document.querySelector(".map");
    this.pinkMapOptions = {
      center: [59.93626948, 30.32121459],
      zoom: 18,
      controls: ["zoomControl"],
    };
    this.pinkPlacemarkContent = {
      hintContent: "Расположение офиса Pink",
      balloonContent: "Кококок кок кокококо ко кок к окококо!",
    };
    this.pinkPlacemarkOptions = {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.svg",
      iconImageSize: [36, 36],
      iconImageOffset: [-16, -16],
    };

    this.boundInit = this.init.bind(this);

    ymaps.ready(this.boundInit);
  }

  init() {
    const pinkMap = new ymaps.Map(this.map, this.pinkMapOptions);
    const pinkPlacemark = new ymaps.Placemark(
      pinkMap.getCenter(),
      this.pinkPlacemarkContent,
      this.pinkPlacemarkOptions
    );
    pinkMap.geoObjects.add(pinkPlacemark);
  }
}

new Ymap();
