import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import Project from '../Project/Project'
import NewItem from '../NewItem/NewItem'

export default function App() {
    const [user, setUser ] = useState(null)
    
    
    return(
        <main className='App'>
            {
                user ?
                <Routes>
                    <Route path='/' element={<Project user={user} setUser={setUser}/>} />
                    <Route path='/NewItem' element={<NewItem user={user} setUser={setUser}/>} />
                </Routes>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}