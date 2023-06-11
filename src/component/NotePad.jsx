import React, { useState } from 'react';
import { styled } from 'styled-components';

// const headCase = styled.div`
// width: 400px;
// padding: 10px;
// border-radius: 5px solid #000;
// `


















const Notepad = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const addNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, { note: currentNote, time: new Date() }]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Notepad</h2>
      <div>
        <input
          type="text"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.note} 
            <span>{note.time.toLocaleDateString()}</span>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notepad;
