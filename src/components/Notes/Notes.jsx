import { useEffect, useState } from 'react'

export default function Notes({ saveProject, notes }) {
    const [text, setText] = useState({})
    // const [update, setUpdate] = useState(false)

    const handleChange = (event) => {
        setText({...text, [event.target.name]: event.target.value})
        // saveProject({ notesVal: text.newText})
    }

    useEffect(() => {
        setText({ newText: notes})
    },[])

    useEffect(() => {
        saveProject({ notesVal: text.newText})
    },[text])

    return (
        <div>
            <h3>Notes</h3>
            <textarea
                type='text'
                name="newText"
                onChange={handleChange}
                value={text.newText}
                rows="20" cols="110"
            />
        </div>
    )
}