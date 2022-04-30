import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [returnedProjects, setReturnedProjects] = useState([])

    const loadProjects = async () => {
        const response = await getProjects()
        setReturnedProjects(response.data)
    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <main className='progress-component'>
                {
                    returnedProjects.map(item => {
                        return (
                            <div>
                                <Link to={`/project/${item._id}`}>{item.title}</Link>
                            </div>
                        )
                    })
                }
        </main>
    )
}