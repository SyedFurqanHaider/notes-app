const fs = require('fs');
const getNotes = () => 'My notes.';

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
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
}