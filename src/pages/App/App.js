import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import NewProject from '../NewProject/NewProject'
import Project from '../Project/Project'


export default function App() {
    const [user, setUser ] = useState(null)
    
    const loadProject = (projectTitle) => {

    }
    
    return(
        <main className='App'>
            {
                user ?
                <Routes>
                    <Route path='/' element={<NewProject user={user} setUser={setUser} loadProject={loadProject}/>} />
                    <Route path='/project/:id' element={<Project user={user} setUser={setUser}/>} />
                </Routes>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}