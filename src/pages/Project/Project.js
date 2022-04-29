import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'
import NewItemForm from '../../components/NewItemForm/NewItemForm'
import { updateProject } from '../../utilities/projects'

export default function Project() {
    const [projectId, setProjectId] = useState(null)
    const [savedProject, setSavedProject] = useState({
        title: "New Project",
        timeVal: 900,
        rootVal: "C",
        scaleVal: "MAJOR",
        tonesVal: "T - T - S - T - T - T - S",
        bpmVal: 120,
        soundVal: "GUITAR",
        itemsVal: [],
        notesVal: ""
    })

    const saveProject = (newAttr) => {
        setSavedProject({...savedProject, ...newAttr})
        
    }

    const uploadSave = () => {
        updateProject(savedProject)
        console.log(savedProject)
    }

    useEffect(() => {

    })

    return (
        <main className='Project'>
            <Title saveProject={saveProject} projectTitle={savedProject.title}/>
            <hr/>
            <TimeTracker saveProject={saveProject}/>
            <hr/>
            <RuleSet saveProject={saveProject}/>
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