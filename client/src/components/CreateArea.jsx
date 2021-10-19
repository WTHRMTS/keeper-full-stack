import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isClicked, setClicked] = useState(false);
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function handleClick() {
    setClicked(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {isClicked && <input onChange={handleChange} name="noteTitle" placeholder="Title" value={note.noteTitle} />}
        <textarea onClick={handleClick} onChange={handleChange} name="noteContent" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={note.noteContent}/>
        <Zoom in={isClicked}>
          <Fab onClick={(event)=> {
            props.onAdd(note);
            setNote({
                noteTitle: "",
                noteContent: "",
              })
              event.preventDefault();
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
