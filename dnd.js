var roll = require('./roll');
var createLiving = require('./living');
var createWeapon = require('./weapons');

let stats = (str, dex, con, int, wis, cha) => {
    let getMod = (number) => Math.floor((number - 10) / 2)
    return {
        str: {value: str, mod: getMod(str)},
        dex: {value: dex, mod: getMod(dex)},
        con: {value: con, mod: getMod(con)},
        int: {value: int, mod: getMod(int)},
        wis: {value: wis, mod: getMod(wis)},
        cha: {value: cha, mod: getMod(cha)},
    }
}
//            x   o  o   x  o   x
// my roll [ 16, 11, 7, 18, 9, 13 ]
let hero = createLiving("John", stats(18, 13, 16, 7, 11, 9));
let goblin = createLiving("Goblin", stats(8, 8, 8, 8, 8, 8));
  
hero.wield(createWeapon('sword', 6))
console.log(hero)
  
  
  
  