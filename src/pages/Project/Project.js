import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'
import { updateProject, getProject } from '../../utilities/projects'
import { useParams } from "react-router-dom"

export default function Project() {
    const [temp, setTemp] = useState({})
    const [render, setRender] = useState(false)
    const params = useParams()
    const projectId = params.id
    const [savedProject, setSavedProject] = useState({})
    // const [savedProject, setSavedProject] = useState({
    //     title: "",
    //     timeVal: 0,
    //     rootVal: "",
    //     scaleVal: "",
    //     tonesVal: "",
    //     bpmVal: 0,
    //     soundVal: "",
    //     itemsVal: [],
    //     notesVal: "",
    // })

    // const [savedProject, setSavedProject] = useState({
    //     title: "New Project",
    //     timeVal: 900,
    //     rootVal: "C",
    //     scaleVal: "MAJOR",
    //     tonesVal: "T - T - S - T - T - T - S",
    //     bpmVal: 120,
    //     soundVal: "GUITAR",
    //     itemsVal: [],
    //     notesVal: "",
    // })

    const saveProject = (newAttr) => {
        setSavedProject({...savedProject, ...newAttr})
    }

    const loadProject = async (id) => {
        const response = await getProject(id)
        setSavedProject(response)
        setRender(!render)
    }

    const uploadSave = () => {
        updateProject(savedProject)
    }

    useEffect(() => {
        loadProject(projectId)
    },[])

    const loaded = () => {
        return (
            <main className='Project'>
                {/* <h1>{savedProject.title}</h1> */}
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