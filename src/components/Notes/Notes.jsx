import { useEffect, useState } from 'react'

export default function Notes({ saveProject, notes }) {
    const [text, setText] = useState({})

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value})
        saveProject({ notesVal: text.newText})
    }

    useEffect(() => {
        setText({ newText: notes})
    },[])

    return (
        <div>
            <h3>Notes</h3>
            <textarea
                type='text'
                name="newText"
                onChange={handleChange}
                value={text.newText}
                rows="15" cols="50"
            />
        </div>
    )
}