const chalk = require('chalk');
const fs = require('fs');
const getNotes = () => 'My notes.';

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if(!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log('Note added!');
  } else {
    console.log('Title already taken!');
  }
}

const removeNote = ({ title }) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length === notesToKeep.length) {
    console.log(chalk.red.inverse("No note found!"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed!"));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse('Your Notes!'));
  notes.forEach(note => {
    console.log(note.title);
  });
}

const readNote = ({ title }) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red('No note found!'));
  }
}
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
  try
  {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  }
  catch(e)
  {
    console.log(e);
    return [];
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
}