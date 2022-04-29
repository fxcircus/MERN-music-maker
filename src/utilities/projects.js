import axios from 'axios'
const URL = 'http://localhost:3001/projects'


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