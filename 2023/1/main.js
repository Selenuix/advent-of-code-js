const fs = require('fs')
const path = require('path')

const fileContent = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
const matches = fileContent.split('\n').map(line => line.match(/[0-9]/g))
let sum = 0

matches.forEach((match) => {
  if (match !== null) {
    if (match.length > 1) {
      let lineValue = Object.values(match)[0] + Object.values(match).pop()

      sum += parseInt(lineValue)
    } else {
      let lineValue = Object.values(match)[0] + Object.values(match)[0]
      sum += parseInt(lineValue)

    }
  }
})

console.log(sum)
