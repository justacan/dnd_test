module.exports = (die, how_many) => {
    return {
      result: Array(how_many)
      .fill()
      .map(() => Math.ceil( Math.random() * die) ),
      sum: function() {return this.result.reduce((t,s) => t + s)},
    }
}

