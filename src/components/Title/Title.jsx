import { useEffect, useState } from 'react'

export default function Title({ saveProject, projectTitle, render }) {
    const [currentText, setCurrentText] = useState ({})

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
        
    }

    useEffect(() => {
        setCurrentText({title: projectTitle})
    },[])

    useEffect(() => {
        saveProject(currentText)
    },[currentText])

    useEffect(() => {
            
    },[render])
    
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