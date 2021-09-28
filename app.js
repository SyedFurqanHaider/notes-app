const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Adding a new note!',
  builder: {
    title: {
      describe: "Note title.",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body.",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv);
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

yargs.parse();