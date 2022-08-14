import { useState } from "react"

const Display = ({notes, toggleImportanceOf}) => {

    const [showAll, setShowAll] = useState(true)

    const handleOnClick = () => {
        setShowAll(!showAll)
    }

    const notesToShow = showAll ? notes : notes.filter((note) => note.important)
    
    return <div>
        <h1>Notes</h1>
        <button onClick = {handleOnClick} >Show {showAll ? "Important" : "All"}</button>
        <ul>
            {notesToShow.map(note => 
                <li className = 'note' key = {note.id}>
                    {note.content}
                    <button onClick = {() => toggleImportanceOf(note.id)}>{note.important? 'make not important' : 'make important'}</button>
                </li>
            )}
        </ul>
    </div>
}

export default Display