import { useState } from 'react';
import '../App.css';
import Display from './Display';

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);

  const [noteContent, setNoteContent] = useState("")

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()

    const newNote = {
      id : notes.length + 1,
      content : noteContent,
      important : false
    }

    setNotes(notes.concat(newNote))
    setNoteContent("")
  }

  return <div>

  <Display notes = {notes}></Display>

  <form onSubmit={addNote}>
    <input value={noteContent} onChange={handleNoteChange}></input>
    <button type="submit">save</button>
  </form>


  </div>
}

export default App
