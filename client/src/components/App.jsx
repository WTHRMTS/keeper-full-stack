import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import NoteList from "./NoteList"
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

  async function addItem(note) {
    console.log(note)
    await api.createItem(note)
    updateNotes(prevNotes => {
      return [...prevNotes, note]
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
        title={note.title} 
        content={note.content}
        onDelete={deleteItem}
      />))}
      <Footer />
    </div>
  );
}

export default App;
