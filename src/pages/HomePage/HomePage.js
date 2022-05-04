import NavBar from '../../components/NavBar/NavBar'

export default function HomePage({ setUser, user }) {

    return (
        <main className='home-page'>
            <div className='nav-zone'>
                <NavBar userEmail={user.email} userName={user.name} setUser={setUser} />
            </div>
            <div className='home-image-zone'>
                <img src='/mmmhomepg.png'/>
                <p>A single page application designed for music making sessions. Create and manage projects!</p>
                <p>Each project includes a timer, inspiration generator, to-do lists, and notes.</p>
                <p>Made using the MERN stack.</p>
            </div>
        </main>
    )
}