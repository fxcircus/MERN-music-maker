import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'
import { updateProject, getProject, deleteProject } from '../../utilities/projects'
import { useParams } from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar'

export default function Project({ setUser, user }) {
    const params = useParams()
    const projectId = params.id
    const [ savedProject, setSavedProject ] = useState(null)
    const [ render, setRender ] = useState(false)
    const [ saveBtnTxt, setSaveBtnTxt ] = useState('Save')
    const [ delBtnTxt, setDelBtnTxt ] = useState('Delete')
    const [ isProjectDeleted, setIsProjectDeleted ] = useState (false)

    const saveProject = (newAttr) => {
        setSavedProject({...savedProject, ...newAttr})
    }

    const saveButtonText = (message) => {
        setTimeout(() => {
            setSaveBtnTxt(message)
        }, 1000);
    }

    const delButtonText = (message) => {
        setTimeout(() => {
            setDelBtnTxt(message)
        }, 1000);
    }

    const loadProject = async (id) => {
        setSavedProject(null)
        const response = await getProject(id)
        setSavedProject(response)
    }

    const uploadSave = async () => {
        const response = await updateProject(savedProject)
        setSaveBtnTxt('Done!')
        saveButtonText('Save')
        setRender(!render)
    }

    const deleteThisProject = async () => {
        setDelBtnTxt('Project Deleted')
        const response = await deleteProject(savedProject._id)
        console.log(`deleted ${response}`)
        delButtonText('Delete')
        setSavedProject(null)
        setIsProjectDeleted(true)
        setRender(!render)
    }

    useEffect(() => {
        loadProject(projectId)
    },[render])

    const loaded = () => {
        return (
            <main className='Project'>

                <div className='nav-zone'>
                    <NavBar setRender={setRender} render={render} userEmail={user.email} userName={user.name} setUser={setUser} />
                </div>

                <div className='project-zone'>
                    <Title saveProject={saveProject} projectTitle={savedProject.title} render={render}/>
                    <hr/>

                    <TimeTracker saveProject={saveProject} time={savedProject.timeVal}/>
                    <hr/>

                    <RuleSet saveProject={saveProject} rules={savedProject}/>
                    <hr/>

                    <table>
                        <Progress saveProject={saveProject} projectId={savedProject._id}/>
                    </table>

                    <hr/>
                    <Notes saveProject={saveProject} notes={savedProject.notesVal}/>

                    <div className='project-button-area'>
                        <button onClick={(e) => {uploadSave()}}>{saveBtnTxt}</button>
                        <button onClick={(e) => {deleteThisProject()}}>{delBtnTxt}</button>
                    </div>

                </div>

                <img src='/gtr-standing.png' />
            
            </main>
        )
    }
    
    const loading = () => {
        return (
            <main className='Project'>
                <div className='nav-zone'>
                    <NavBar setRender={setRender} render={render} userEmail={user.email} userName={user.name} setUser={setUser}  />
                </div>
                {
                    savedProject && savedProject.title ?
                    <div>Loading...</div>
                    :
                    <h1>Project deleted. Load another 1 pls...</h1>
                }
            </main>
            )
    }
            
    return savedProject && savedProject.title ? loaded() : loading()
}