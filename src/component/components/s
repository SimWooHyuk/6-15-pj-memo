import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const NotePadWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 5px;
  border-color: #c93;
  height: auto;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    width: 512px;
    height: 80px; 
    padding: 10px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }

  .input {
    width: 512px;
    height: 40px;
    padding: 10px;
    font-size: 24px;
  }

  .addButton {
    width: 76px;
    height: 30px;
  }

  .deleteButton {
    width: 100px;
  
  }

  .insert {
    width: 512px;
    height: auto;
    padding: 10px;
    
    /* display: flex; */
    align-items: center;
    overflow: auto;
    word-wrap: break-word;
  }

  .date {
    
  }

  .moveButton {
    width: 100px;
  }
  .button-container {
    display: flex; 
    /* flex: 1; */
    width: 50%;

  }
  .clear {
    color: #666;
    text-decoration: line-through;
  }
  .note-content {
    /* flex: 1; */
    width: 50%;
  }
`;

const MemoCount = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [search, setSearch] = useState('');

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    const storageNotes = localStorage.getItem('notes');
    if (storageNotes) {
      setNotes(JSON.parse(storageNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const checkNote = newNote.trim();
    if (checkNote !== '') {
      setNotes([checkNote, ...notes]);
      setNewNote('');
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const moveNoteToTop = (index) => {
    const updatedNotes = [...notes];
    const [note] = updatedNotes.splice(index, 1);
    updatedNotes.unshift(note);
    setNotes(updatedNotes);
  };

  const moveNoteToDown = (index) => {
    const updatedNotes = [...notes];
    const [note] = updatedNotes.splice(index, 1);
    updatedNotes.push(note);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) => note.includes(search));
  
  return (
    <NotePadWrapper>
      <h2>메모장</h2>
      <form onSubmit={addNote}>
        <div>
          <input
            className="input"
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="addButton" type="submit">
            추가
          </button>
          <input type="text" value={search} placeholder='검색할 내용을 입력하세요' onChange={inputChange} /> 
          <p>메모 개수: {notes.length}</p>
        </div>
      </form>
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={uuidv4()} className="insert">
            <div className="note-content">{note}</div>
            <div className="button-container">
              <button className="deleteButton" onClick={() => deleteNote(index)}>
                삭제
              </button>
              <button className="moveButton" onClick={() => moveNoteToTop(index)}>
                제일 위로
                <div className="date">[<span>{new Date().toLocaleDateString()}</span>]</div>
              </button>
              <button className="moveButton" onClick={() => moveNoteToDown(index)}>
                제일 아래로
              </button>
            </div>
          </li>
        ))}
      </ul>
    </NotePadWrapper>
  );
};

export default MemoCount;
