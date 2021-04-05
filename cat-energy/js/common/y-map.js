class Ymap {
  constructor() {
    this.map = document.querySelector("._map");
    this.pinkMapOptions = {
      center: [59.93863506417266, 30.323117499999945],
      zoom: 18,
      controls: ["zoomControl"],
    };
    this.pinkPlacemarkContent = {
      hintContent: "Расположение магазина Cat-Energy",
      balloonContent: "Мяумуя мяммя мяумуямуя мямуям мяу!",
    };
    this.pinkPlacemarkOptions = {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin.png",
      iconImageSize: [57, 53],
      iconImageOffset: [-26, -26],
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
