'use strict';


window.utils = (function () {

  // Функция для поиска случайного числа
  var getRandomLimit = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  var randomFeatures = [];
  // Рандомно удаляем эелементы из массива FEATURES методом filter
  var getFeatures = function (array) {
    randomFeatures = array.filter(function () { // принимаем массив
      return (Math.random() * 10) & 1 ? true : false; // возвращаем правду если условие выполняется
    });
    return randomFeatures; // полученный массив из элементов возвращенных
  };

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

  return {
    getRandomLimit: getRandomLimit,
    getFeatures: getFeatures,
    renderString: renderString,
    getRandomUniq: getRandomUniq,
    getRandomUniqLimit: getRandomUniqLimit
  };

})();
