import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import HomePage from '../HomePage/HomePage'
import Project from '../Project/Project'
import Projects from '../Projets/Projects'
// import NewProject from '../NewProject/NewProject'

export default function App() {
    const [ user, setUser ] = useState(null)
    const [ projectId, setProjectId] = useState(null)
    const [ projectName, setProjectName ] =useState("")
    const [ projectLoaded, setProjectLoaded ] = useState(false)
    
    const loadProject = (returnedProject) => {
        setProjectId(returnedProject._id)
        setProjectName(returnedProject.title)
        setProjectLoaded(true)
    }
    
    return(
        <main className='App'>
            {
                user ?
                <Routes>
                    <Route path='/' element={<HomePage user={user} setUser={setUser} />} />
                    {/* <Route path='/' element={<NewProject user={user} setUser={setUser} loadProject={loadProject}/>} /> */}
                    {/* <Route path='/all-projects' element={<Projects setUser={setUser} />}/> */}
                    <Route path='/project/:id' element={<Project user={user} setUser={setUser}/>} />
                </Routes>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}