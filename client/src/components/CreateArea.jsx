import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isClicked, setClicked] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
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
      <form className="create-note" action="/" method="post">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={note.content}/>
        <Zoom in={isClicked}>
          <Fab onClick={(event)=> {
            props.onAdd(note);
            setNote({
                title: "",
                content: "",
              })
              event.preventDefault();
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
