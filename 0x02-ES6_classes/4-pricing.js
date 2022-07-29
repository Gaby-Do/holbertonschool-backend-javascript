import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Is not a number');
    }
    this.amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Is not Currency type');
    }
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
