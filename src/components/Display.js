import { useState } from "react"

const Display = ({notes}) => {

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
                <li key = {note.id}>
                    {note.content}
                </li>
            )}
        </ul>
    </div>
}

export default Display