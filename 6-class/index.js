'use strict'

class Car {
  #mark;
  #model;
  #mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#_mileage = mileage;
  }

  set #_mileage(newMileage) {
    this.#mileage = newMileage;
  }

  get #_mileage() {
    return this.#mileage;
  }

  changeMileage(miles) {
    return this.#mileage = miles;
  }

  info() {
    console.log(`Автомобиль марки ${this.#mark}, модель ${this.#model}, имеет пробег ${this.#mileage} км.`);
  }
}

const car1 = new Car('BMW', "X5", 125000);
car1.info();

car1.changeMileage(142325);
car1.info();
