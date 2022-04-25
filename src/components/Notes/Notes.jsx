import { useState } from 'react'

export default function Notes() {
    const [text, setText] = useState({ newText: "" })

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h3>Notes</h3>
            <textarea type='text' name="newText" onChange={handleChange} value={text.newText} rows="10" cols="50"/>
        </div>
    )
}