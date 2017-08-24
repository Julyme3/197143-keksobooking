'use strict';

// модуль для создания данных

var TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPE = [{en: 'flat', ru: 'Квартира'}, {en: 'house', ru: 'Дом'}, {en: 'bungalo', ru: 'Бунгало'}];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
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

window.data = (function () {

  // создаем объявления, каждое объявление это объект
  var notices = [];
  var createNotices = function (value) {
    for (var i = 0; i <= value; i++) {

      notices [i] = {

        author: {
          avatar: 'img/avatars/user' + 0 + utils.getRandomUniqLimit(minNumberImg, maxNumberImg)[i] + '.png'
        },

        offer: {
          title: TITLE[utils.getRandomUniq(TITLE)[i]],
          address: '' + utils.getRandomLimit(minX, maxX) + ', ' + utils.getRandomLimit(minY, maxY) + '',
          price: utils.getRandomLimit(minPrice, maxPrice),
          type: TYPE[utils.getRandomLimit(0, TYPE.length - 1)].ru,
          rooms: utils.getRandomLimit(minRooms, maxRooms),
          guests: utils.getRandomLimit(minGuests, maxGuests),
          checkin: CHECKIN[utils.getRandomLimit(0, CHECKIN.length - 1)],
          checkout: CHECKOUT[utils.getRandomLimit(0, CHECKOUT.length - 1)],
          features: utils.getFeatures(FEATURES),
          description: '',
          photos: []
        },

        location: {
          x: window.utils.getRandomLimit(minX, maxX),
          y: window.utils.getRandomLimit(minY, maxY)
        }
      };

    }

    return notices;
  };

  createNotices(7);

  return {
    notices: notices
  };

})();
