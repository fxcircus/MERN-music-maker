import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'

export default function Project() {
    const [savedProject, setSavedProject] = useState({
        timeVal: 0,
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

    return (
        <main className='Project'>
            <Title/>
            <hr/>
            <TimeTracker saveProject={saveProject}/>
            <hr/>
            <RuleSet saveProject={saveProject}/>
            <hr/>
            <h1>Items</h1>
            <table>
                <Progress saveProject={saveProject}/>
            </table>
            <hr/>
            <Notes saveProject={saveProject}/>
        </main>
    )
}