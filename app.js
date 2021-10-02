const { argv } = require('yargs');
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
  builder: {
    title: {
      describe: "Note title.",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    notes.removeNote(argv);
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note!',
  builder: {
    title: {
      describe: "Note title.",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    notes.readNote(argv);
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes!',
  handler: function () {
    notes.listNotes();
  }
});

yargs.parse();