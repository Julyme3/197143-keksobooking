'use strict';

// модуль для отрисовка пина

window.pin = (function () {

  var heightOfPin = 75;
  var widthOfPin = 56;
  var authorAvatars = utils.getRandomUniqLimit(minNumberImg, maxNumberImg);
  var blockMap = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();

  // создаем пин - 8 штук
  for (var i = 0; i <= 7; i++) {
    var newNotice = document.createElement('div');
    var imgNotice = document.createElement('img');
    newNotice.className = 'pin';
    newNotice.style.left = (utils.getRandomLimit(minX, maxX) - (widthOfPin / 2)) + 'px';
    newNotice.style.top = (utils.getRandomLimit(minY, maxY) - heightOfPin) + 'px';
    imgNotice.className = 'rounded';
    imgNotice.src = 'img/avatars/user' + 0 + authorAvatars[i] + '.png';
    imgNotice.style.width = '40px';
    imgNotice.style.height = '40px';

    newNotice.appendChild(imgNotice);
    fragment.appendChild(newNotice);
  }

  // вставляем фрагмент с пинами в blockMap
  blockMap.appendChild(fragment);

  // Переменные для событий пина

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

})();
