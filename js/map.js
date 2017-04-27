'use strict';
var arrOfTitle = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var valueRandom = [];
var tup = [];
var opss = [1, 2, 3, 4, 5];

//var getRandom = function(arr) {
//  for (var i = 0; i < arr.length; i++) {
//  valueRandom = (Math.round(Math.random() * arr.length));
////  console.log(arr[valueRandom[i]]);
////  return valueRandom;
//  }
//};
//
//getRandom(arrOfTitle);

//var getRandomLimit = function(min, max) {
//    var valueRandomLimit = Math.round(Math.random() * (max - min) + min);
//    return valueRandomLimit;
//};
//
//var avatarOfAuthor = 'img/avatars/user{{0'+ getRandomLimit(1, 8) +'}}';
//var getRandomUnique = function(arr) {
//  var arrRandom = [];
//  while (arrRandom <= arr.length) {
//    var randomNumber = Math.floor(Math.random() * arr.length);
//    if(arrRandom.indexOf(randomNumber) == -1) {
//      arrRandom.push(randomNumber);
//         console.log(arrRandom.length);
//  }
//}
//}
//getRandomUnique(arrOfTitle);

//
//var arry = []; //пустой массив, в который заносим рандомные числа
//var ridi = function(max) {
//  while (arry.length <= max.length) {
//    var randomnumber = Math.floor(Math.random() * max.length);
//    if(arry.indexOf(randomnumber) == -1) {
//      arry.push(randomnumber);
//       console.log(arry);
//    }
//  }
//};
//
//ridi(opss);
//var arr = [];
//var rundomnumber;
//var rind = function(max) {
////  debugger;
////записываем в этот массив рандомные числа
//var max; // максимальная длина массива
////  console.log(max);    //случайное число
//while (arr.length <= max) {
////  console.log(arr.length);
//  rundomnumber = Math.round(Math.random() * max);
//  if (arr.indexOf(rundomnumber) == -1) {
//    arr.push(rundomnumber);
////    console.log(rundomnumber);
////    arr.length++;
//  }
//}
//};
//var line =
//var avatarOfAuthor = 'img/avatars/user{{0'+ rind() +'}}';
//rind(5);
//console.log(arr);
var chislo;
var arr = [];
var getRandom = function(massiv) {
  while(arr.length <= massiv.length) {
    chislo = Math.round(Math.random() * massiv.length);
    if(arr.indexOf(chislo) == -1) {
      arr.push(chislo);
    }
    return chislo;
  }
};

getRandom(arrOfTitle);
console.log(arrOfTitle[chislo]);

var arrayy = [];
var valueRandomLimit;
var getRandomLimit = function(min, max) {
  debugger;
  while(arrayy.length <= max) {
    valueRandomLimit = (Math.round(Math.random() * (max - min) + min));
    if(arrayy.indexOf(valueRandomLimit) == -1) {
      arrayy.push(valueRandomLimit);
    }
//    return;
  }
};
getRandomLimit(1, 8);
console.log(valueRandomLimit);
