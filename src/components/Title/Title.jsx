import { useEffect, useState } from 'react'

export default function Title({ saveProject, projectTitle }) {
    const [currentText, setCurrentText] = useState ({})

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
        saveProject(currentText)
    }

    useEffect(() => {
        setCurrentText({title: projectTitle})
    },[])
    return (
        <input
            type="text"
            name="title"
            className='project-title'
            onChange={handleChange}
            value={currentText.title}
        />
    )
}