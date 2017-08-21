'use strict';

var TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPE = [{en: 'flat', ru: 'Квартира'}, {en: 'house', ru: 'Дом'}, {en: 'bungalo', ru: 'Бунгало'}];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var quantityOfNotices = 7;
var minNumberImg = 1;
var maxNumberImg = 8;
var minPrice = 1000;
var maxPrice = 1000000;
var minRooms = 1;
var maxRooms = 5;
var minGuests = 1;
var maxGuests = 10;
var minX = 300;
var maxX = 900;
var minY = 100;
var maxY = 500;
var heightOfPin = 75;
var widthOfPin = 56;
var randomFeatures = [];

// Функция для поиска случайного числа
var getRandomLimit = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

// Ищем случайное значение ключа ru в массиве объектов TYPE
var valueOfType = TYPE[getRandomLimit(0, TYPE.length - 1)].ru;

// Рандомно удаляем эелементы из массива FEATURES методом filter
var getFeatures = function (array) {
  randomFeatures = array.filter(function () { // принимаем массив
    return (Math.random() * 10) & 1 ? true : false; // возвращаем правду если условие выполняется
  });
  return randomFeatures; // полученный массив из элементов возвращенных
};
getFeatures(FEATURES);

// Функция для создания строки со span с классом features методом forEach
var renderString = function (array) {
  var feature = '';
  array.forEach(function (item) {
    feature += '<span class="feature__image feature__image--' + item + '"></span>';
  });
  return feature;
};

/* Функция для вычисления уникального случайного числа по макс. длине массива */
var numberRandomUniq; // случайное значение
var arr = []; // массив для заполнения вычисленными случайными значениями
var getRandomUniq = function (valueOfArr) {

  while (arr.length <= valueOfArr.length) {
    numberRandomUniq = Math.round(Math.random() * valueOfArr.length);

    if (arr.indexOf(numberRandomUniq) === -1) { // если случайное значение не содержится в массиве, то
      arr.push(numberRandomUniq); // положить его в массив
    }

  }
  return arr;
};
var titleOfNotices = getRandomUniq(TITLE);

/* Функция для вычисления уникального случайного числа в интервале чисел */
var array = [];
var numberRandomUniqLimit;

var getRandomUniqLimit = function (min, max) {

  while (array.length < max) {
    numberRandomUniqLimit = (Math.round(Math.random() * (max - min) + min));

    if (array.indexOf(numberRandomUniqLimit) === -1) {
      array.push(numberRandomUniqLimit);
    }

  }
  return array;
};
var authorAvatars = getRandomUniqLimit(minNumberImg, maxNumberImg);

var notices = [];
var createNotices = function (value) {
  for (var i = 0; i <= value; i++) {

    notices [i] = {

      author: {
        avatar: 'img/avatars/user' + 0 + authorAvatars[i] + '.png'
      },

      offer: {
        title: TITLE[titleOfNotices[i]],
        address: '' + getRandomLimit(minX, maxX) + ', ' + getRandomLimit(minY, maxY) + '',
        price: getRandomLimit(minPrice, maxPrice),
        type: valueOfType,
        rooms: getRandomLimit(minRooms, maxRooms),
        guests: getRandomLimit(minGuests, maxGuests),
        checkin: CHECKIN[getRandomLimit(0, CHECKIN.length - 1)],
        checkout: CHECKOUT[getRandomLimit(0, CHECKOUT.length - 1)],
        features: getFeatures(FEATURES),
        description: '',
        photos: []
      },

      location: {
        x: getRandomLimit(minX, maxX),
        y: getRandomLimit(minY, maxY)
      }
    };

  }
  return notices;
};
createNotices(quantityOfNotices);

var blockMap = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();

for (var i = 0; i <= quantityOfNotices; i++) {
  var newNotice = document.createElement('div');
  var imgNotice = document.createElement('img');
  newNotice.className = 'pin';
  newNotice.style.left = (getRandomLimit(minX, maxX) - (widthOfPin / 2)) + 'px';
  newNotice.style.top = (getRandomLimit(minY, maxY) - heightOfPin) + 'px';
  imgNotice.className = 'rounded';
  imgNotice.src = 'img/avatars/user' + 0 + authorAvatars[i] + '.png';
  imgNotice.style.width = '40px';
  imgNotice.style.height = '40px';

  newNotice.appendChild(imgNotice);
  fragment.appendChild(newNotice);
}
blockMap.appendChild(fragment);

var similarNoticeTemplate = document.querySelector('#lodge-template');
var similarListNotice = document.querySelector('#offer-dialog');
var dialogPanel = document.querySelector('.dialog__panel');
var ImgAuthor = document.querySelector('.dialog__title');
var noticeElement = similarNoticeTemplate.content.cloneNode(true);
var renderDialog = function (notice) {

  similarListNotice.removeChild(dialogPanel);

//  var noticeElement = similarNoticeTemplate.content.cloneNode(true);

  noticeElement.querySelector('.lodge__title').textContent = notice.offer.title;
  noticeElement.querySelector('.lodge__address').textContent = notice.offer.address;
  noticeElement.querySelector('.lodge__price').innerHTML = notice.offer.price + '&#x20bd;/ночь';
  noticeElement.querySelector('.lodge__price').setAttribute('required', true); // обязательно для заполнения
  noticeElement.querySelector('.lodge__price').setAttribute('pattern', '^[ 0-9]+$'); // любое число
  noticeElement.querySelector('.lodge__type').textContent = notice.offer.type;
  noticeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + notices[0].offer.guests + ' гостей в ' + notice.offer.rooms + ' комнатах';
  noticeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + notices[0].offer.checkin + ' , выезд до ' + notice.offer.checkout;
  noticeElement.querySelector('.lodge__features').innerHTML = renderString(notice.offer.features);
  noticeElement.querySelector('.lodge__description').textContent = notice.offer.description;
  ImgAuthor.firstElementChild.src = notice.author.avatar;

  similarListNotice.appendChild(noticeElement);
};
renderDialog(notices[0]);

// Переменные для событий

var pinMap = document.querySelector('.tokyo__pin-map');
var pinMain = document.querySelector('.pin__main');
pinMap.removeChild(pinMain);
var pins = pinMap.querySelectorAll('.pin');
var dialogBlock = document.querySelector('.dialog');
var dialogClose = dialogBlock.querySelector('.dialog__close');
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var popupEscHandlier = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopup();
  }
};

var openPopup = function () {
  dialogBlock.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHandlier);
};

var closePopup = function () {
  dialogBlock.classList.add('hidden');
  for (i = 0; i < pins.length; i++) {
    var pin = pins[i];
    pin.classList.remove('pin--active');
  }

// убираем слушатель Esc на документе
  document.removeEventListener('keydown', popupEscHandlier);
};

// при нажатии на пин открываем объявление и добавляем класс active пину, если уже есть класс active - удаляется (в цикле ищем...)
pinMap.addEventListener('click', function (evt) {
  var target = evt.target;

  // если уже есть класс active - удаляем
  for (i = 0; i < pins.length; i++) {
    var pin = pins[i];
    if (pin.classList.contains('pin--active')) {
      pin.classList.remove('pin--active');
    }
  }

  if (target.tagName === 'IMG') {
    evt.target.parentElement.classList.add('pin--active');
  } else if (target.classList.contains('pin')) {
    target.classList.add('pin--active');
  }

  openPopup();
});

// всем пинам добавляем tabindex
for (i = 0; i < pins.length; i++) {
  var pin = pins[i];
  pin.setAttribute('tabindex', 0);
}

// открываем попап нажатием Enter на пин
pinMap.addEventListener('keydown', function (evt) {
  if (evt.target.classList.contains('pin') && evt.keyCode === ENTER_KEY_CODE) {
    openPopup();
    evt.target.classList.add('pin--active');
  }
});

// при нажатии на крест объявление закрывается, класс active у пина удаляется (ищется в цикле)
dialogClose.addEventListener('click', function () {
  closePopup();
});

// закрываем попап нажатием Enter на крест
dialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closePopup();
  }
});

// Проверка введенных данных формы
var form = document.querySelector('.notice__form');
var titleForm = form.querySelector('#title');
var priceForm = form.querySelector('#price');
var timeIn = form.querySelector('#time');
var timeOut = form.querySelector('#timeout');
var typeOfHousing = form.querySelector('#type');
var room = form.querySelector('#room_number');
var guest = form.querySelector('#capacity');
var inputs = form.querySelectorAll('input');
var submit = form.querySelector('.form__submit');

titleForm.setAttribute('required', true); // обязательно для заполнения
titleForm.setAttribute('minlength', 30); // минимальная длина
titleForm.setAttribute('maxlength', 100); // максимальная длина
priceForm.setAttribute('required', true); // обязательно для заполнения
priceForm.setAttribute('min', 1000); // минимальное значение
priceForm.setAttribute('max', 1000000); // максимальное значение
priceForm.setAttribute('value', 1000); // значение по умолчанию

// функция меняет значение поля2 (input2)  в зависимости от текущего значения поля1 (input1)
var changeSelectValue = function (input1, input2) {
  var selected = input1.value;
  input2.value = selected;
};

// Синхронизируем значение поля время выезда в зависимости от установки поля времени въезда
// Событие change происходит по окончании изменении значения элемента формы, когда это изменение зафиксировано.
timeIn.addEventListener('change', function (evt) {
  changeSelectValue(evt.target, timeOut);
});

 // Синхронизируем значение поля время въезда в зависимости от установки поля времени выезда
timeOut.addEventListener('change', function (evt) {
  changeSelectValue(evt.target, timeIn);
});

// Корректируем минимальную цену в зависимости от установки в поле "Тип жилья"
typeOfHousing.addEventListener('change', function (evt) {
  if (evt.target.value === typeOfHousing.options[0].value) {
    priceForm.value = 1000;
  } else if (evt.target.value === typeOfHousing.options[1].value) {
    priceForm.value = 0;
  } else {
    priceForm.value = 10000;
  }

});

// Корректируем значение в поле "Кол-во гостей" от установки в поле "Кол-во комнат"
room.addEventListener('change', function (evt) {
  changeSelectValue(evt.target, guest);
});

// Корректируем значение в поле "Кол-во комнат" от установки в поле "Кол-во гостей"
guest.addEventListener('change', function (evt) {
  changeSelectValue(evt.target, room);
});

 // Обводим невалидные поля красной рамкой
submit.addEventListener('click', function (evt) {
  evt.preventDefault();
  var isValid = true;

  for (i = 0; i < inputs.length; i++) { // проходим по всем полям
    var input = inputs[i];
    input.style.border = "none";
    if (input.checkValidity() === false) { // если проверку не прошло, тогда...
      isValid = false;
      input.style.border = '2px solid green';
    }
  }

  if (isValid) {
    form.submit();
    // сбрасываем введенные значения в поля формы form
    form.reset();
  }

});

// убираем обводку полей в момент введения данных
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.addEventListener('input', function (evt) {
    evt.target.style.border = "none";
  });
};
