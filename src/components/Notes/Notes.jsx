import { useState } from 'react'

export default function Notes({ saveProject }) {
    const [text, setText] = useState({ newText: "" })

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value})
        saveProject({ notesVal: text.newText})
    }

    return (
        <div>
            <h3>Notes</h3>
            <textarea type='text' name="newText" onChange={handleChange} value={text.newText} rows="15" cols="50"/>
        </div>
    )
}