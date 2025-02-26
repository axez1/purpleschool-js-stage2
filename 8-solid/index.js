'use strict'

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    console.log(`Тут может быть новая логика расчета!`);
  }
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  #hours;

  constructor(amount, hours) {
    super(amount);
    this.#hours = hours;
  }

  calculateTotal() {
    return this.amount * this.#hours;
  }
}

class ItemBilling extends Billing {
  #items;

  constructor(amount, items) {
    super(amount);
    this.#items = items;
  }

  calculateTotal() {
    return this.amount * this.#items;
  }
}

const fixedBilling = new FixedBilling(23);
const hourBilling = new HourBilling(13, 9);
const itemBilling = new ItemBilling(2, 14);


console.log(fixedBilling.calculateTotal());
console.log(hourBilling.calculateTotal());
console.log(itemBilling.calculateTotal());



