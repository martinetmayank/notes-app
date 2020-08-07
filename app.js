const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes')
msg = getNotes()

console.log(msg)
console.log(chalk.green.inverse.bold("Sucess"))