import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);
  console.log(notes);
  function addItem(noteText) {
    updateNotes(prevNotes => {
      return [...prevNotes, noteText]
    });
  }
  function deleteItem(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((note, index) => {return index !== id;})
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {notes.map((note, index) => (
        <Note 
        key={index} 
        id={index}
        title={note.noteTitle} 
        content={note.noteContent}
        onDelete={deleteItem} />))}
      <Footer />
    </div>
  );
}

export default App;
