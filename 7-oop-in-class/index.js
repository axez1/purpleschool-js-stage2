'use strict'

class Unit {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  say() {
    console.log('Говорит что-то на неизвестном языке');
  }
}

class Orc extends Unit {
  #weapon;

  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.#weapon = weapon;
  }

  say() {
    console.log(`Я говорю c тобой на ${this.language}. Локтар Огар! Зови меня ${this.name}!`);
  }
  hit() {
    console.log(`Удар ${this.#weapon}om!`);
  }
}

class Alf extends Unit {
  #spell;

  constructor(race, name, language, spell) {
    super(race, name, language);
    this.#spell = spell;
  }

  say() {
    console.log(`Я говорю c тобой на ${this.language}! Воины ночи приветствуют тебя! Называй меня ${this.name}!`);
  }
  castSpell() {
    console.log(`Я использовал заклинание ${this.#spell}!`);
  }
}

const orc = new Orc('orc', 'Black Bear', 'old Orctian', 'tomahawk');

orc.say();
orc.hit();

const alf = new Alf('alf', 'Traxes', 'alfian', 'Magick Wind');

alf.say();
alf.castSpell();

