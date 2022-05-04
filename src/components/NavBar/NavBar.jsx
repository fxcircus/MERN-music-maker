import { useState, useEffect } from 'react'
import { getProjects, createProject } from '../../utilities/projects'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ setRender, render, userEmail, userName, setUser }) {
    const [returnedProjects, setReturnedProjects] = useState([])
    const [currentText, setCurrentText] = useState ({})
    const [returnedProject, setReturnedProject] = useState(null)

    const loadProjects = async () => {
        setReturnedProjects([])
        console.log(userEmail)
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

    const logOut = async (evt) => {
        await userService.logout()
        setUser(null)
        // window.location.reload()
    }

    useEffect(() => {
        loadProjects()
    }, [render, returnedProject])

    const loaded = () => {
        return (
            <main className='nav-bar'>
    
                <Link to={'/'} >
                    <img className='navbar-logo' src='/MMM-white.png'/>
                </Link>
    
                <div className='user-area'>
                    <hr/>
                    <p>{userName}</p>
                    <Link to={'/'} onClick={ (e) =>{ logOut() } }>
                        Sign out
                    </Link>
                    <hr/>
                </div>


                
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

    const loading = () => {
        return <p>loading</p>
    }
    

    return returnedProjects ? loaded() : loaded()
}