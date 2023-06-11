import React, { useState, useEffect } from 'react';

const MemoCount = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const storageNotes = localStorage.getItem('notes');
    if (storageNotes) { 
      setNotes(JSON.parse(storageNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const checkNote = newNote.trim();
    if (checkNote !== '') {
      setNotes([...notes, checkNote]);
      setNewNote('');
    } else {
      alert('Alert');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>메모장</h2>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>메모 추가하기ㅣ</button>
        <p>메모 개수 :  {notes.length}</p>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}ㅤㅤㅤㅤㅤ[<span>{new Date().toLocaleDateString()}</span>]
            <button onClick={() => deleteNote(index)}>메모 삭제하기</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoCount;
