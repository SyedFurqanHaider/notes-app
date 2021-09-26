const validator = require('validator');
const fs = require('fs'); // loading node modules
const getNotes = require('./notes.js');

// fs.writeFileSync('notes.txt', 'My name is Furqan.');

// fs.appendFileSync('notes.txt', ' I live in Islamabad.');

console.log(getNotes());
console.log(validator.isEmail('furqan@gmail.com'));