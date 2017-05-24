'use strict';

var TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPE = ['flat', 'house', 'bungalo'];
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
var classFeature = [];
var blockFeatures= [];
var newSpan;

// Функция для поиска случайного числа
var getRandomLimit = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
// Переименовываем элементы в массиве типа жилья
var valueOfType = TYPE[getRandomLimit(0, TYPE.length - 1)];
if (valueOfType === 'house') {
  valueOfType = 'Дом';
} else if (valueOfType === 'bungalo') {
  valueOfType = 'Бунгало';
} else {
  valueOfType = 'Квартира';
};

// Рандомно удаляем эелементы из массива FEATURES
var getFeatures = function(array) {
  randomFeatures = array.splice(getRandomLimit(0, array.length), getRandomLimit(0, array.length));
  return randomFeatures;
};

// Создаем <span> по классам features
var createFeatures = function () {
  var result = getFeatures(FEATURES);
  for (var i = 0; i <= result.length - 1; i++) {
//    debugger;
    classFeature [i] = 'feature__image feature__image--' + result [i];
    blockFeatures [i] = document.querySelector('.lodge__features');
    blockFeatures[i].insertAdjacentHTML('afterbegin', '<span class=' + classFeature[i] + '><span>');
//    console.log(classFeature[i]);
//    newSpan = document.createElement('span');
//    blockFeatures = document.querySelector('.lodge__features');
//    newSpan.className = classFeature [i];
//    blockFeatures.appendChild(newSpan);
  };
//  return classFeature;
};
//createFeatures();
//console.log(classFeature);
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
  return notices [i];
};

createNotices(quantityOfNotices);

var blockMap = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();

for (var i = 0; i <= quantityOfNotices; i++) {
  var newNotice = document.createElement('div');
  var imgNotice = document.createElement('img');
  newNotice.className = 'pin';
  newNotice.style.left = (getRandomLimit(minX, maxX) + (widthOfPin / 2)) + 'px';
  newNotice.style.top = (getRandomLimit(minY, maxY) + heightOfPin) + 'px';
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

similarListNotice.removeChild(dialogPanel);
var noticeElement = similarNoticeTemplate.content.cloneNode(true);
noticeElement.querySelector('.lodge__title').textContent = TITLE[titleOfNotices[0]];
noticeElement.querySelector('.lodge__address').textContent = notices[0].offer.address;
noticeElement.querySelector('.lodge__price').innerHTML = notices[0].offer.price + '&#x20bd;/ночь';
noticeElement.querySelector('.lodge__type').textContent = notices[0].offer.type;
noticeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + notices[0].offer.guests + ' гостей в ' + notices[0].offer.rooms + ' комнатах';
noticeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + notices[0].offer.checkin + ' , выезд до ' + notices[0].offer.checkout;
//noticeElement.querySelector('.lodge__features').textContent = notices[0].offer.features;
//for (var i = 0; i <= classFeature.length; i++){
//noticeElement.querySelector('.lodge__features').innerHTML = '<span class=' + createFeatures() + '></span>';
//}
similarListNotice.appendChild(noticeElement);
