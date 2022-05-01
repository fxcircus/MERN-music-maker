import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects'
import { Link } from 'react-router-dom'

export default function NavBar({ setRender, render }) {
    const [returnedProjects, setReturnedProjects] = useState([])

    const loadProjects = async () => {
        const response = await getProjects()
        setReturnedProjects(response.data)
    }

    const handleClick = () => {
        setRender(!render)
    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <main className='nav-bar'>
            <img className='navbar-logo' src='/MMM-white.png'/>
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
        </main>
    )
}