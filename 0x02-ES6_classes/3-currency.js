export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
