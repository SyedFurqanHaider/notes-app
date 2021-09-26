const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Adding a new note!',
  handler: function () {
    console.log("Adding a note!");
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  handler: function () {
    console.log("Remove the note!");
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note!',
  handler: function () {
    console.log("Reading a note!");
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes!',
  handler: function () {
    console.log("List out all notes!");
  }
});

console.log(yargs.argv)
