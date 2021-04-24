ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [58.475502, 39.996711],
        zoom: 6,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkKirov = new ymaps.Placemark(
      [58.578354, 49.64709],
      {
        hintContent: "АВА Центр Киров",
        balloonContent:
          "Комсомольская улица, 41, Ленинский район, Киров, Россия",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "scroll-logo.png",
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -15],
      }
    ),
    myPlacemarkYoshka = new ymaps.Placemark(
      [56.635347, 47.870566],
      {
        hintContent: "АВА Центр Йошкар-Ола",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "scroll-logo.png",
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -15],
      }
    ),
    myPlacemarkSpb = new ymaps.Placemark(
      [59.880071, 30.309176],
      {
        hintContent: "АВА Центр Санкт-Петербург",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "scroll-logo.png",
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -15],
      }
    );

  function zoomOut(myMap) {
    init();
  }

  myPlacemarkKirov.events.add("click", function (evt) {
    if (myMap.getZoom() < 7) {
      evt.preventDefault();
      myMap.setCenter([58.578354, 49.64709], 15);
      myPlacemarkKirov.properties.set({
        balloonContentHeader: `Кировский центр прикладного анализа поведения`,
        balloonContentBody: `г.Киров, ул.Комсомольская, д.41
                                <p>Телефон: <a href="tel:+79128267712">+7 912 826 77 12</a></p>
                                <p>Email: <a href="mailto:aba.center.kirov@gmail.com">aba.center.kirov@gmail.com</a></p>
                                <h3>Режим работы</h3>
                                <p>Пн-Пт 8.00 – 19.00</p>
                                <p>Сб 8.00 – 16.00</p>
                                <p>Вс выходной</p>`,
      });
      setupControls(myMap, myPlacemarkKirov);
    }
  });

  myPlacemarkYoshka.events.add("click", function (evt) {
    if (myMap.getZoom() < 7) {
      evt.preventDefault();
      myMap.setCenter([56.635347, 47.870566], 15);
      myPlacemarkYoshka.properties.set({
        balloonContentHeader: `Центр АВА-терапии в Йошкар-Оле`,
        balloonContentBody: `г. Йошкар-Ола, ул. Зарубина 35
                                <p>Телефон: <a href="tel:+79229927711">+7 922 992 77 11</a></p>
                                <p>Email: <a href="mailto:aba.online.pro@gmail.com">aba.online.pro@gmail.com</a></p>
                                <h3>Режим работы</h3>
                                <p>Пн-Пт 8.00 – 19.00</p>
                                <p>Сб 8.00 – 16.00</p>
                                <p>Вс выходной</p>`,
      });
      setupControls(myMap);
    }
  });

  myPlacemarkSpb.events.add("click", function (evt) {
    if (myMap.getZoom() < 7) {
      evt.preventDefault();
      myMap.setCenter([59.880071, 30.309176], 15);
      myPlacemarkSpb.properties.set({
        balloonContentHeader: "Центр АВА-терапии в Санкт-Петербурге",
        balloonContentBody: `Санкт Петербург, Московский проспект, 22к4, литера Т, второй этаж, офис 14Н
                                <p>Телефон: <a href="tel:+79229927711">+7 922 992 77 11</a></p>
                                <p>Email: <a href="mailto:aba.online.pro@gmail.com">aba.online.pro@gmail.com</a></p>
                                <h3>Режим работы</h3>
                                <p>Пн-Пт 8.00 – 19.00</p>
                                <p>Сб 8.00 – 16.00</p>
                                <p>Вс выходной</p>`,
      });
      setupControls(myMap);
    }
  });

  myMap.geoObjects
    .add(myPlacemarkKirov)
    .add(myPlacemarkYoshka)
    .add(myPlacemarkSpb);
}

function setupControls(map) {
  var btnZoomOut = new ymaps.control.Button("Вернуться назад");
  btnZoomOut.options.set("maxWidth", 200);

  btnZoomOut.events.add(["click"], function (e) {
    map.setCenter([58.475502, 39.996711], 6);
    map.balloon.close();
    map.controls.remove(btnZoomOut);
  });
  map.controls.add(btnZoomOut);
}
