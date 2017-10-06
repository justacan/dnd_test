function attack(attacker, victim) {
    let mod = attacker.getModifier('str')
    let rollz = roll(20).sum();
    let hit =  rollz + 2 + mod
    
    if (rollz == 20) {
        let damage = (attacker.wielded.getDamage(true) + mod)
        victim.hp -= damage
        console.log(attacker.name,'Critically Hits for:', damage)
    }
    else if (hit >= victim.ac) {
        let damage = (attacker.wielded.getDamage() + mod)
        victim.hp -= damage
        console.log(attacker.name,'Hits for:', damage)
    } else {
      console.log(attacker.name, 'Misses')
    }
  }

function startCombat(round) {
    if (!round) round = 1;
    let stop = false;

    // combat_order = [hero, goblin]
    
    
    attack(hero, goblin);
    if (!goblin.isAlive()) {        
        console.log(`${goblin.name} dies.`);
        return true;
    }
    
    attack(goblin, hero);
    if (!hero.isAlive()) {        
        console.log(`${hero.name} dies.`);
        return true;
    }

    console.log('');

    if (!stop) {
        setTimeout(() => startCombat(round++), 1000 * 1)
    }

    return;
    
}
  
// console.log(hero)
// console.log(goblin)

  
startCombat()  
// console.log()
  