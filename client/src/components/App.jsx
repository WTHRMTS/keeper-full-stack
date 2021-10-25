import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import api from "../api"
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);
  useEffect(() => {
        async function getNotes() {
            try {
                const response = await api.getList()
                updateNotes(response.data.data)
            } catch(error) {
                console.log('error', error);
            }
        }
        getNotes();
    }, []);

  function addItem(note) {
    api.createItem(note)
    updateNotes(prevNotes => {
      return [...prevNotes, note]
    });
    window.location.reload(true);
  }
  function deleteNote(id, noteId) {
    api.deleteItem(id);
    updateNotes(prevNotes => {
      return prevNotes.filter((note, index) => {return index !== noteId;})
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {notes.map((note, index) => (
        <Note 
        key={index} 
        noteId={index}
        id={note._id}
        title={note.title} 
        content={note.content}
        onDelete={deleteNote}
      />))}
      <Footer />
    </div>
  );
}

export default App;
