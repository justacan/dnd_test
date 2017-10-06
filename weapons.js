var roll = require('./roll.js');

class Weapon {
    constructor(damage) {
      this.damage = damage  
    }
    getDamage(crit) { 
        let r = roll(this.damage, (crit) ? 2 : 1).sum();
        return (r <= 0) ? 1 : r 
    }
}
  
class Sword extends Weapon {}
class Axe extends Weapon {}

module.exports = createWeapon = (type, damage) => {
    switch(type) {
        case 'sword': return new Sword(damage)
        case 'axe': return new Sword(damage)
        default: throw ('pick a real weapon!'); // change all of this
    }
}