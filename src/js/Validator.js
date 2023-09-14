import luhnAlg from 'luhn-alg';

class Validator {
  static isNumberValid(cardNum) {
    return luhnAlg(cardNum);
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

export default Validator;
