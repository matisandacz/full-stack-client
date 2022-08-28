import { useEffect, useState } from 'react';
import '../App.css';
import Display from './Display';

import loginService from '../services/login'
import notesService from '../services/notes'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const App = () => {

  const [notes, setNotes] = useState([]);

  const [noteContent, setNoteContent] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchData(){
      const response = await notesService.getAll();
      setNotes(response);
    }
    fetchData()
  }, [])

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value)
  }

  const addNote = async (event) => {

    event.preventDefault()

    const newNote = {
      content : noteContent,
      important : false
    }

    try {
      const response = await notesService.create(newNote);
      setNotes(notes.concat(response))
      setNoteContent("")
    } catch(err){
      console.log(err)
    }

  }

  const toggleImportanceOf = async (id) => {

    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important : !note.important}

    const response = await notesService.makeImportant(id, changedNote);
    setNotes(notes.map(note => note.id === id ? response : note))
  }

  const deleteOf = async (id) => {
    try {
      await notesService.deleteNote(id);
      setNotes(notes.filter(note => note.id !== id))
    } catch(err){
      console.log(err)
    }

  }

  const login = async (event) => {
    event.preventDefault()

    try {

      const user = await loginService.login({
        username,
        password
      })

      setUser(user)
      setUsername("")
      setPassword("")
      notesService.setToken(user.token)

    } catch(err){
      console.log(err)
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const notesForm = () => {
    return <form onSubmit={addNote}>
      <input value={noteContent} onChange={handleNoteChange}></input>
      <button type="submit">save</button>
    </form>
  }
  
  const loginForm = () => {
    return (
      <Form onSubmit={login}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder={username} onChange={handleUsernameChange} />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder= {password} onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }

  const greetingDialog = () => {
    return <h1>
      Hello {user.name}!
    </h1>
  }

  const display = () => {
    return <Display notes = {notes} toggleImportanceOf = {toggleImportanceOf} deleteOf = {deleteOf}> </Display>
  }

  return <div>

  {user === null && loginForm()}

  {user !== null && greetingDialog()}

  {user !== null && display()}

  {user !== null && notesForm()}

  </div>
}

export default App
