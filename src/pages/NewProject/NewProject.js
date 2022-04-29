import { useEffect, useState } from 'react'

export default function NewProject({ createProject, projectTitle }) {
    const [currentText, setCurrentText] = useState ({})

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
        // createProject(currentText)
    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        // setCurrentText({title: projectTitle})
    },[])
    
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                className='project-title'
                onChange={handleChange}
                value={currentText.title}
                placeholder="Project Title"
            />
            <input type="submit" value="Go!"/>
        </form>
    )
}