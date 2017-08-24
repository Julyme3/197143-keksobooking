'use strict'

// модуль для валидации формы

window.form = (function () {

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
      input.style.border = 'none';
      if (input.checkValidity() === false) { // если проверку не прошло, тогда...
        isValid = false;
        input.style.border = '2px solid red';
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
      evt.target.style.border = 'none';
    });
  }

})();
