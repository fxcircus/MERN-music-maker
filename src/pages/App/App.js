import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import Project from '../Project/Project'

export default function App() {
    const [user, setUser ] = useState(null)
    
    return(
        <main className='App'>
            {
                user ?
                <Project/>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}