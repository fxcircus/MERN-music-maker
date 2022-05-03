import { useState, useEffect } from 'react'
import { getProjects, createProject } from '../../utilities/projects'
import { Link } from 'react-router-dom'

export default function NavBar({ setRender, render, userEmail }) {
    const [returnedProjects, setReturnedProjects] = useState([])
    const [currentText, setCurrentText] = useState ({})
    const [returnedProject, setReturnedProject] = useState(null)

    const loadProjects = async () => {
        const response = await getProjects(userEmail)
        setReturnedProjects(response.data)
    }

    const handleChange = (evt) => {
        setCurrentText({ ...currentText, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await createProject(currentText, userEmail)
        setCurrentText({ title: "" })
        setReturnedProject(response)
    }

    const handleClick = () => {
        setRender(!render)
    }

    useEffect(() => {
        // console.log('clicked')
        loadProjects()
    }, [render, returnedProject])

    return (
        <main className='nav-bar'>

            <Link to={'/'} >
                <img className='navbar-logo' src='/MMM-white.png'/>
            </Link>
            
            {
                returnedProjects.map(item => {
                    return (
                        <div>
                            <Link to={`/project/${item._id}`}>
                                <button className='nav-button' onClick={handleClick}>
                                    {item.title}
                                </button>
                            </Link>
                        </div>
                    )
                })
            }

            <form autoComplete="off" onSubmit={handleSubmit}>
                <input
                    className='new-project-input'
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={currentText.title}
                    placeholder="New Project"
                />
            </form>

            <a href="https://github.com/fxcircus/MERN-music-maker" target="_blank" >
                <img className="logo-img" src="/roy-pic.jpg" alt="logo-and-gitHub-repo-link" />
            </a>

        </main>
    )
}