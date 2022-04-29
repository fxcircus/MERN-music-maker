import { useEffect, useState } from 'react'
import { createProject } from '../../utilities/projects'

export default function NewProject({ loadProject }) {
    const [currentText, setCurrentText] = useState ({})

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
        // createProject(currentText)
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        const response = await createProject(currentText)
        loadProject(response._id)
    }

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