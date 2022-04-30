import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'
import { updateProject, getProject } from '../../utilities/projects'
import { useParams } from "react-router-dom"

export default function Project() {
    const params = useParams()
    const projectId = params.id
    const [savedProject, setSavedProject] = useState({})

    const saveProject = (newAttr) => {
        setSavedProject({...savedProject, ...newAttr})
    }

    const loadProject = async (id) => {
        const response = await getProject(id)
        setSavedProject(response)
    }

    const uploadSave = async () => {
        const response = await updateProject(savedProject)
        console.log('saved')
    }

    useEffect(() => {
        loadProject(projectId)
    },[])

    const loaded = () => {
        return (
            <main className='Project'>
                <Title saveProject={saveProject} projectTitle={savedProject.title}/>
                <hr/>
                <TimeTracker saveProject={saveProject} time={savedProject.timeVal}/>
                <hr/>
                <RuleSet saveProject={saveProject} rules={savedProject}/>
                <hr/>
                <table>
                    <Progress saveProject={saveProject}/>
                </table>
                <hr/>
                <Notes saveProject={saveProject}/>
                <button onClick={(e) => {uploadSave()}}>Save</button>
            </main>
        )
    }
    
    const loading = () => {
        return <div>loading</div>
    }
            
    return savedProject && savedProject.title ? loaded() : loading()
}