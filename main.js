/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 13:
/***/ ((module) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (array) {
  return function (number) {
    var len = number ? number.length : 0,
        bit = 1,
        sum = 0;

    while (len--) {
      sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
    }

    return sum % 10 === 0 && sum > 0;
  };
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

module.exports = exports['default'];

},{}]},{},[1])(1)
});


//# sourceMappingURL=index.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/luhn-alg/index.js
var luhn_alg = __webpack_require__(13);
var luhn_alg_default = /*#__PURE__*/__webpack_require__.n(luhn_alg);
;// CONCATENATED MODULE: ./src/js/Validator.js

class Validator {
  static isNumberValid(cardNum) {
    return luhn_alg_default()(cardNum);
  }
  static getCardName(cardNum) {
    switch (true) {
      case Validator.isAmericanExpress(cardNum) === 'american_express':
        return 'american_express';
      case Validator.isVisa(cardNum) === 'visa':
        return 'visa';
      case Validator.isMastercard(cardNum) === 'mastercard':
        return 'mastercard';
      case Validator.isDiscover(cardNum) === 'discover':
        return 'discover';
      case Validator.isDiners(cardNum) === 'diners':
        return 'diners';
      case Validator.isJcb(cardNum) === 'jcb':
        return 'jcb';
      case Validator.isMir(cardNum) === 'mir':
        return 'mir';
      default:
        return 'card';
    }
  }
  static isAmericanExpress(cardNum) {
    const cardno = /^(?:3[47][0-9]{13})$/;
    if (cardNum.match(cardno)) {
      return 'american_express';
    }
    return null;
  }
  static isVisa(cardNum) {
    const cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (cardNum.match(cardno)) {
      return 'visa';
    }
    return null;
  }
  static isMastercard(cardNum) {
    const cardno = /^(?:5[1-5][0-9]{14})$/;
    if (cardNum.match(cardno)) {
      return 'mastercard';
    }
    return null;
  }
  static isDiscover(cardNum) {
    const cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    if (cardNum.match(cardno)) {
      return 'discover';
    }
    return null;
  }
  static isDiners(cardNum) {
    const cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    if (cardNum.match(cardno)) {
      return 'diners';
    }
    return null;
  }
  static isJcb(cardNum) {
    const cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
    if (cardNum.match(cardno)) {
      return 'jcb';
    }
    return null;
  }
  static isMir(cardNum) {
    const cardno = /^(?:220[0-4])\d+$/;
    if (cardNum.match(cardno)) {
      return 'mir';
    }
    return null;
  }
}
/* harmony default export */ const js_Validator = (Validator);
;// CONCATENATED MODULE: ./src/js/components/card-valid-widget/CardValidWidget.js



class CardValidWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  static get markUp() {
    return `
    <div class="card-valid">
      <h1 class="card-valid__title">Проверка номеров банковских карт</h1>
      <ul class="card-valid__img-list">
        <li class="card-valid__img-item american_express"></li>
        <li class="card-valid__img-item mastercard"></li>
        <li class="card-valid__img-item diners"></li>
        <li class="card-valid__img-item discover"></li>
        <li class="card-valid__img-item jcb"></li>
        <li class="card-valid__img-item visa"></li>
        <li class="card-valid__img-item mir"></li>
        <li class="card-valid__img-item card"></li>
      </ul>
      <form class="card-valid__form">
        <input class="card-valid__form-input" type="number" name="num" placeholder="введите номер карты">
        <button class="card-valid__form-btn">Проверить</button>
      </form>
      <span class="card-valid__result"></span>
    </div>
    `;
  }
  static get submitSelector() {
    return '.card-valid__form-btn';
  }
  static get formValid() {
    return '.card-valid__form';
  }
  static get inputSelector() {
    return '.card-valid__form-input';
  }
  static get itemCardImg() {
    return '.card-valid__img-item';
  }
  static get selector() {
    return '.card-valid';
  }
  static get resultInfo() {
    return '.card-valid__result';
  }
  bindToDOM() {
    this.parentEl.innerHTML = CardValidWidget.markUp;
    this.element = this.parentEl.querySelector(CardValidWidget.selector);
    this.listCards = this.element.querySelectorAll(CardValidWidget.itemCardImg);
    this.form = this.element.querySelector(CardValidWidget.formValid);
    this.submit = this.element.querySelector(CardValidWidget.submitSelector);
    this.input = this.element.querySelector(CardValidWidget.inputSelector);
    this.result = this.element.querySelector(CardValidWidget.resultInfo);
    this.form.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('focus', this.onFocus);
  }
  onSubmit(e) {
    e.preventDefault();
    const userNum = this.input.value;
    let isValid;
    let cardName;
    if (userNum) {
      isValid = js_Validator.isNumberValid(userNum);
    } else {
      return;
    }
    if (isValid) {
      cardName = js_Validator.getCardName(userNum);
      if (cardName === 'card') {
        this.result.textContent = `Введённый номер - ${userNum} валиден. Имя карты не распознано.`;
        this.result.classList.add('card-valid__result_valid');
        for (const item of this.listCards) {
          if (item.classList.contains('card')) {
            item.classList.add('card-valid__img-item_active');
            break;
          }
        }
        this.input.value = '';
      } else {
        this.result.textContent = `Введённый номер - ${userNum} валиден. Имя карты ${cardName.toUpperCase()}.`;
        this.result.classList.add('card-valid__result_valid');
        for (const item of this.listCards) {
          if (item.classList.contains(cardName)) {
            item.classList.add('card-valid__img-item_active');
            break;
          }
        }
        this.input.value = '';
      }
    } else {
      this.result.textContent = `Введённый номер - ${userNum} не валиден!`;
      this.result.classList.add('card-valid__result_notvalid');
      this.input.value = '';
    }
  }
  onFocus() {
    this.result.textContent = '';
    this.result.classList.remove('card-valid__result_notvalid', 'card-valid__result_valid');
    for (const item of this.listCards) {
      item.classList.remove('card-valid__img-item_active');
    }
  }
}
/* harmony default export */ const card_valid_widget_CardValidWidget = (CardValidWidget);
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector('.container');
const cardValidVidget = new card_valid_widget_CardValidWidget(container);
cardValidVidget.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;