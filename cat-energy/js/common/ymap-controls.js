"use strict";
(function () {
  const map = document.querySelector(".contacts__map");

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map(map, {
      center: [59.938923979824565, 30.323240724470573],
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [59.938923979824565, 30.323240724470573],
      {
        balloonContentHeader: "Catenergy",
        balloonContentBody: "Функциональное питание для котов",
        balloonContentFooter: "Наш сайт: https://cat-energy.com",
        hintContent: "Адрес магазина Catenergy",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin-mobile.png",
        iconImageSize: [102, 103],
        iconImageOffset: [-30, 0],
      }
    );
    myMap.geoObjects.add(myPlacemark);
  }
})();
