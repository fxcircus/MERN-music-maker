import axios from 'axios'
const URL = 'http://localhost:3001/api/projects'

export async function getProjects() {
    try {
        const fetchedProjects = await axios.get(URL)
        return fetchedProjects
    } catch(error){
        console.log(error)
    }
}

export async function createProject(projectTitle) {
    try {
        console.log(projectTitle)
        const theTitle = projectTitle.title
        const fetchedProject = await axios ({
            method: 'post',
            url: `${URL}`,
            data: {
                title: theTitle,
                timeVal: 900,
                rootVal: "C",
                scaleVal: "MAJOR",
                tonesVal: "T - T - S - T - T - T - S",
                bpmVal: 120,
                soundVal: "GUITAR",
                itemsVal: [],
                notesVal: ""
            }
        })
        return fetchedProject
    } catch(error) {
        console.log(error)
    }
}

export async function updateProject(project) {
    try {
        const fetchedProject = await axios ({
            method: 'put',
            url: `${URL}/projects`,
            data: {
                timeVal: project.timeVal,
                rootVal: project.rootVal,
                scaleVal: project.scaleVal,
                tonesVal: project.tonesVal,
                bpmVal: project.bpmVal,
                soundVal: project.soundVal,
                itemsVal: project.itemsVal,
                notesVal: project.notesVal
            }

        })
        return fetchedProject
    } catch(error) {
        console.error(error)
    }
}