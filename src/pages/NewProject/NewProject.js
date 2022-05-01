import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createProject } from '../../utilities/projects'
import NavBar from '../../components/NavBar/NavBar'

export default function NewProject({ loadProject }) {
    const [ render, setRender ] = useState(false)
    const [currentText, setCurrentText] = useState ({})
    const [returnedProject, setReturnedProject] = useState(null)

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
        // createProject(currentText)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await createProject(currentText)
        setReturnedProject(response)
        loadProject(response.data)
    }

    return (
        <main className='Project'>
            <div className='nav-zone'>
                    <NavBar setRender={setRender} render={render}/>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    className='project-title'
                    onChange={handleChange}
                    value={currentText.title}
                    placeholder="Project Title"
                />
                <Link to="/all-projects">Go!</Link>
            </form>
        </main>       
    )
}