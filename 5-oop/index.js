'use strict'

const Unit = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Unit.prototype.say = function () {
  console.log(`Я говорю на ${this.language} и меня называют ${this.name}`);
}

const Orc = function (race, name, language, weapon) {
  Unit.call(this, race, name, language);
  this.weapon = this.weapon;
}

Orc.prototype = Object.create(Unit.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log(`Я ударил оружием!`);
}

const Alf = function (race, name, language, spell) {
  Unit.call(this, race, name, language);
  this.spell = spell;
}

Alf.prototype = Object.create(Unit.prototype);
Alf.prototype.constructor = Alf;

Alf.prototype.castSpell = function () {
  console.log(`Я использовал заклинание!`);
}

const orc = new Orc('orc', 'Black Bear', 'old Orctian', 'tomahawk');

orc.say();
orc.hit();

const alf = new Alf('alf', 'Traxes', 'alfian', 'wand');

alf.say();
alf.castSpell();