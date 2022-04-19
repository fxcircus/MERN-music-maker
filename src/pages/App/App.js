import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'

export default function App() {
    const [user, setUser ] = useState(null)
    return(
        <main className='App'>
            {
                user ?
                <h1>connected!</h1>
                :
                <AuthPage/>

            }
        </main>
    )
}