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

  function addItem(note) {
    // console.log(note)
    api.createItem(note)
    // await api.getLatest()
    // const response = api.getLatest(note.title);
    // console.log(response.data.data);
    updateNotes(prevNotes => {
        // const response = api.getList()
        //         prevNotes = response.data.data
        // return prevNotes;
      return [...prevNotes, note]
    });
  }
  function deleteNote(id, noteId) {
    api.deleteItem(id);
    // api.getLatest(id);
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
