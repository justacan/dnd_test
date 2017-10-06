function getHPforLevel(level, con_modifier) {
    // let other_levels = Array(level).fill()
    if ( level == 1 ) {
        return 10 + con_modifier
    } else {
        let levels = Array(level - 1).fill().map(() => roll(10).sum() + con_modifier)
        return [10 + con_modifier].concat(levels).reduce((t,s) => t+s)
    }
}  
  
class Living {
    constructor(name, stats) {
        this.name = name;
        this.stats = stats;
        this.level = 1
        this.ac = 10 + this.stats.dex.mod

        this.hp = getHPforLevel(this.level, this.stats.con.mod);        
        
        this.wielded;
    }
    getModifier(stat) {
        return Math.floor((this.stats[stat] - 10) / 2)
    }
    isAlive() {
        return (this.hp > 0);
    }
    damage(amount) {
        this.hp -= amout;
    }
    wield(weapon) {
        this.wielded = weapon
        // console.log(typeof weapon)
    }
}

module.exports = createLiving = (name, stats) => {
    return new Living(name, stats)
}