(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([[179],{

/***/ 579:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _js_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_js__WEBPACK_IMPORTED_MODULE_0__);
/* js */

/* scss */



/***/ }),

/***/ 392:
/***/ (function() {

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

var thousandth = function thousandth(num) {
  return Number(num).toLocaleString(undefined, {});
};

var scroll_top = 0;

var body_fixed_on = function body_fixed_on() {
  scroll_top = window.scrollY;
  document.body.style.cssText = 'overflow: hidden; top: -' + scroll_top + 'px';
};

var body_fixed_off = function body_fixed_off() {
  document.body.removeAttribute('style');
  window.scrollTo(0, scroll_top);
};
/* Маска для input c номером телефона */


function activate_mask_phone() {
  [].forEach.call(document.querySelectorAll('input[type=tel]'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
}

activate_mask_phone();
document.getElementById('js-open-menu').addEventListener('click', function (e) {
  e.preventDefault();
  var link = e.target.closest('#js-open-menu'),
      block = document.getElementById('header-choice'),
      body = document.body;

  if (link.classList.contains('header-link-menu_open')) {
    body_fixed_off();
    body.classList.remove('body-bg');
    link.classList.remove('header-link-menu_open');
    block.classList.remove('is-open');
  } else {
    body_fixed_on();
    body.classList.add('body-bg');
    link.classList.add('header-link-menu_open');
    block.classList.add('is-open');
  }
});
/* Открытие popup */

Array.from(document.querySelectorAll('.js-open-popup')).forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var link = e.target.closest('.js-open-popup');

    if (link.dataset.popup && document.getElementById('popup') && document.getElementById(link.dataset.popup)) {
      body_fixed_on();
      var popup = document.getElementById('popup'),
          popup_html = document.getElementById(link.dataset.popup).innerHTML;
      popup.querySelector('.popup__body').innerHTML = popup_html;
      popup.classList.remove('popup_hide');
      activate_mask_phone();
    }
  });
});
/* Открытие небольших popup с отправкой номера телефона */

Array.from(document.querySelectorAll('.js-phone-popup')).forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var link = e.target.closest('.js-phone-popup');

    if (document.getElementById('popup') && document.getElementById('phone-popup')) {
      var popup_name = link.dataset.name ? link.dataset.name : 'Перезвонить мне';
      body_fixed_on();
      var popup = document.getElementById('popup');
      var popup_body = document.getElementById('phone-popup').children[0].cloneNode(true);
      popup_body.querySelector('.popup-request__name').innerText = popup_name;
      popup_body.querySelector('input[name=form-target]').value = popup_name;
      popup.querySelector('.popup__body').append(popup_body);
      popup.classList.remove('popup_hide');
      activate_mask_phone();
    }
  });
});
/* Закрытие popup */

Array.from(document.querySelectorAll('.js-close-popup')).forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    body_fixed_off();
    var popup = document.getElementById('popup');
    popup.querySelector('.popup__body').innerHTML = "";
    popup.classList.add('popup_hide');
  });
});
Array.from(document.querySelectorAll('.js-rating')).forEach(function (e) {
  var count = e.dataset.rating.replace(/,/, '.');
  var width = 100 / 5 * count;
  e.querySelector('.rating-stars__yellow').style.width = width + '%';
});
Array.from(document.querySelectorAll('.js-number')).forEach(function (e) {
  e.innerText = thousandth(e.textContent);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(579));
/******/ }
]);