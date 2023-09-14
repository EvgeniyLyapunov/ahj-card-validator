import Validator from '../../Validator';

import './card-valid-widget.scss';
import './card-img.scss';

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
      isValid = Validator.isNumberValid(userNum);
    } else {
      return;
    }

    if (isValid) {
      cardName = Validator.getCardName(userNum);
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
    this.result.classList.remove(
      'card-valid__result_notvalid',
      'card-valid__result_valid',
    );
    for (const item of this.listCards) {
      item.classList.remove('card-valid__img-item_active');
    }
  }
}

export default CardValidWidget;
