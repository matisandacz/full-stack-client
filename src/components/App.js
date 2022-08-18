import { useEffect, useState } from 'react';
import '../App.css';
import Display from './Display';
import axios from 'axios';


const App = () => {

  const [notes, setNotes] = useState([]);

  const [noteContent, setNoteContent] = useState("")

  useEffect(() => {
    axios.get('/api/notes').then(
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

    axios.post('/api/notes', newNote)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNoteContent("")
    })
 
  }

  const toggleImportanceOf = (id) => {

    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important : !note.important}

    const url = `/api/notes/${id}`

    axios.put(url, changedNote)
    .then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }

  const deleteOf = (id) => {

    const url = `/api/notes/${id}`

    axios.delete(url).then(response => {
      setNotes(notes.filter(note => note.id !== id))
    })

  }

  return <div>

  <Display notes = {notes} toggleImportanceOf = {toggleImportanceOf} deleteOf = {deleteOf}></Display>

  <form onSubmit={addNote}>
    <input value={noteContent} onChange={handleNoteChange}></input>
    <button type="submit">save</button>
  </form>

  </div>
}

export default App
