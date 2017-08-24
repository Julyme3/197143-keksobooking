'use strict';

// модуль для отрисовка карточки

window.card = (function () {

  var similarNoticeTemplate = document.querySelector('#lodge-template'); // находим шаблон объявления
  var similarListNotice = document.querySelector('#offer-dialog');
  var dialogPanel = document.querySelector('.dialog__panel');
  var ImgAuthor = document.querySelector('.dialog__title');
  var noticeElement = similarNoticeTemplate.content.cloneNode(true); // копируем в новый элемент контент шаблона

  // заполняем полученную карточку данными из объекта-объявления и добавляем в DOM
  var renderDialog = function (notice) {
    similarListNotice.removeChild(dialogPanel);

    noticeElement.querySelector('.lodge__title').textContent = notice.offer.title;
    noticeElement.querySelector('.lodge__address').textContent = notice.offer.address;
    noticeElement.querySelector('.lodge__price').innerHTML = notice.offer.price + '&#x20bd;/ночь';
    noticeElement.querySelector('.lodge__price').setAttribute('required', true); // обязательно для заполнения
    noticeElement.querySelector('.lodge__price').setAttribute('pattern', '^[ 0-9]+$'); // любое число
    noticeElement.querySelector('.lodge__type').textContent = notice.offer.type;
    noticeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + notice.offer.guests + ' гостей в ' + notice.offer.rooms + ' комнатах';
    noticeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + notice.offer.checkin + ' , выезд до ' + notice.offer.checkout;
    noticeElement.querySelector('.lodge__features').innerHTML = utils.renderString(notice.offer.features);
    noticeElement.querySelector('.lodge__description').textContent = notice.offer.description;
    ImgAuthor.firstElementChild.src = notice.author.avatar;

    similarListNotice.appendChild(noticeElement);
  };

  // вызываем функцию для отрисовка объявления
  renderDialog(data.notices[0]);
})();
