import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects'





export default function Projects() {
    const [returnedProjects, setReturnedProjects] = useState([])
    const [render, setRender] = useState(false)

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
                                    {item.title}
                                </div>
                        )
                    })
                }
        </main>
    )
}