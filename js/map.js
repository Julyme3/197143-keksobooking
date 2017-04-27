'use strict';

var arrOfTitle = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var arrOfType = ['flat', 'house', 'bungalo'];
var arrOfCheckin = ['12:00', '13:00', '14:00'];
var arrOfCheckOut = ['12:00', '13:00', '14:00'];
var minNumberImg = 1;
var maxNumberImg = 8;
var minPrice = 1000;
var maxPrice = 1000000;
var minRooms = 1;
var maxRooms = 5;

// Функция для поиска случайного числа
var getRandomLimit = function(min, max) {
  var numberRandomLimit = (Math.round(Math.random() * (max - min) + min));
  return numberRandomLimit;
};

var numberRandomUniq; // случайное значение
var arr = []; // массив для заполнения вычисленными случайными значениями

/* Функция для вычисления уникального случайного числа по макс. длине массива */
var getRandomUniq = function(valueOfArr) {

while(arr.length <= valueOfArr.length) {
    numberRandomUniq = Math.round(Math.random() * valueOfArr.length);

    if(arr.indexOf(numberRandomUniq) == -1) { // если случайное значение не содержится в массиве, то
      arr.push(numberRandomUniq); // положить его в массив
    }

  }
  return arr;
};

var titleOfAdverts = getRandomUniq(arrOfTitle);

var array = [];
var numberRandomUniqLimit;
/* Функция для вычисления уникального случайного числа в интервале чисел */
var getRandomUniqLimit = function(min, max) {

  while(array.length < max) {
    numberRandomUniqLimit = (Math.round(Math.random() * (max - min) + min));

    if(array.indexOf(numberRandomUniqLimit) == -1) {
      array.push(numberRandomUniqLimit);
    }

  }
  return array;
};

var authorAvatars = getRandomUniqLimit(minNumberImg, maxNumberImg);

var dataOfAdverts = [
  {
    author: {
      avatar: authorAvatars[0]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[0]],
      price: getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[1]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[1]],
      price:  getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[2]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[2]],
      price:  getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[3]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[3]],
      price:  getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[4]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[4]],
      price: getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[5]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[5]],
      price: getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[6]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[6]],
      price: getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  },
  {
    author: {
      avatar: authorAvatars[7]
    },
    offer: {
      title: arrOfTitle[titleOfAdverts[7]],
      price: getRandomLimit(minPrice, maxPrice),
      type:  arrOfType[getRandomLimit(0, arrOfType.length-1)],
      rooms: getRandomLimit(minRooms, maxRooms),
      checkin: arrOfCheckin[getRandomLimit(0, arrOfCheckin.length-1)],
      checkout: arrOfCheckOut[getRandomLimit(0, arrOfCheckOut.length-1)],
      description: '',
      photos: []
    },

  }
];
console.log(dataOfAdverts[0].offer.photos);
    // Вопрос
    // location и адрес
// guests в каком интервале искать
