import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const NotePadWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  /* border-radius: 5px;
  border-color: #c93; */
  border: 1px solid black;
  height: auto;
  background-color: #f5dcb7;
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
    border-bottom: 5px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }

  .input {
    width: 491px;
    height: 40px;
    padding: 10px;
    font-size: 24px;
  border: 1px solid black;

  }

  .addButton {
    width: 76px;
    height: 30px;
  border: 1px solid black;
    cursor: pointer;
  }

  .deleteButton {
    width: 100px;
  
  }

  .insert {
    width: 492px;
    height: auto;
    padding: 10px;
    
    /* display: flex; */
    align-items: center;
    overflow: auto;
    word-wrap: break-word;
  }

  .date {
    white-space: nowrap;
  }

  .moveButton {
    width: 100px;
    white-space: nowrap;
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
  .searchBox {
  border: 1px solid black;
  height: 24px;
  padding-top: 3px;
  }
  .searchBox::placeholder, input::placeholder {
    font-weight: 600;
    color: #777;
  }
  .head , input::placeholder {
    text-align: center ;
  }
  .head {
    font-size: 40px;
    padding: 10px 0 10px;
  }
  .padding4px {
    padding: 5px;
  border: 1px solid black;

  }
  body {
    background-color: yellow;
  }
  .headDiv {
    background-color: white;
  }
  .headImg {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmJQNF052AEPZ37spJm-gQtTCpGpmCDv9OA&usqp=CAU );
    height: 70px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
document.body.style = 'background: beige ;';

  const MemoCount = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [search, setSearch] = useState('');
    
      useEffect(() => {
        const storageNotes = localStorage.getItem('notes');
        if (storageNotes) {
          setNotes(JSON.parse(storageNotes));
        }
      }, []);
      
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);


    const inputChange = (e) => {
      const { value } = e.target;
      setSearch(value);
    };

    const addNote = (e) => {
      e.preventDefault(); 
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
    
    function orderMemoUp() {
      let newMemo = [...notes].sort()
      setNotes(newMemo)
    }
    function orderMemoDown() {
      let newMemo = [...notes].sort().reverse();
      setNotes(newMemo)
    }

    const deleteAllNotes = () => {
      setNotes([]);
    };
    
    
    return (
      <NotePadWrapper>
        <div className='headImg'></div>
        <div className='head'>메모장</div>
        
        <form onSubmit={addNote}>
          <div>
            <input
              className="input"
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder='추가할 메모를 작성 후 엔터'
            />
            <button className="addButton"  type="submit">
              추가
            </button>
            <input type="text" className='searchBox' value={search} placeholder='검색할 내용을 입력하세요' onChange={inputChange} />
            <button type='button' className='padding4px' onClick={orderMemoUp}>이름↑</button> 
            <button type='button' className='padding4px' onClick={orderMemoDown}>이름↓</button> 
            <button type='button' className='padding4px' onClick={deleteAllNotes}>메모 전체 삭제</button>
            <p>메모 {notes.length} 개</p>
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

  export default React.memo(MemoCount);
