import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    
    return (
        <main className='auth-page'>
            <img src='/MMM-logo.png'/>
            <div className='login-zone'>
                { showSignUp ?
                    <div>
                        <h1>Sign up</h1>
                        <SignUpForm setUser={setUser} />
                    </div>
                     :
                    <div>
                        <h1>Log in</h1>
                        <LoginForm setUser={setUser} />
                    </div>
                }
                <button className='login-switch-btn' onClick={() => setShowSignUp(!showSignUp)}>
                    { showSignUp ? 'Or log In' : `New user? Sign Up`}
                </button>
            </div>
            {/* <img src='/mmmhomepg.png'/> */}
        </main>
    )
}