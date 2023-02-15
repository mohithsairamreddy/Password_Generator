#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./createPassword.js')

program.version('1.0').description("Password Generator")

program
.option('--l, --length <number>','length of password','8')
.option('--s, --save','save assword to password.txt')
.option('--nn, --no-numbers','remove numbers')
.option('--na, --no-symbols','remove symbols')
.parse()

const {length, save, numbers, symbols } = program.opts()

const generatedPassword = createPassword(length, numbers, symbols)

if(save){
    savePassword
}

clipboardy.writeSync(generatedPassword)

console.log(chalk.red('Generated Password is : ')+chalk.bold(generatedPassword))
console.log(chalk.yellow('Password copied to clipboard'))