import { useEffect, useState } from 'react';
import '../App.css';
import Display from './Display';
import axios from 'axios';


const App = () => {

  const [notes, setNotes] = useState([]);

  const [noteContent, setNoteContent] = useState("")

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then(
    response => setNotes(response.data))
  }, [])

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()

    const newNote = {
      content : noteContent,
      important : false
    }

    axios.post('http://localhost:3001/notes', newNote)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNoteContent("")
    })
 
  }

  const toggleImportanceOf = (id) => {

    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important : !note.important}

    console.log(id)
    console.log(changedNote)

    const url = `http://localhost:3001/notes/${id}`

    axios.put(url, changedNote)
    .then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }

  return <div>

  <Display notes = {notes} toggleImportanceOf = {toggleImportanceOf}></Display>

  <form onSubmit={addNote}>
    <input value={noteContent} onChange={handleNoteChange}></input>
    <button type="submit">save</button>
  </form>


  </div>
}

export default App
