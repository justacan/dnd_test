var roll = require('./roll');

function rollAbilityScore() {
    return Array(6)
    .fill()
    .map(() => roll(6, 4).result
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((t,s) => t+s))
}

console.log(rollAbilityScore())