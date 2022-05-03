import NavBar from '../../components/NavBar/NavBar'

export default function HomePage() {

    return (
        <main className='home-page'>
            <div className='nav-zone'>
                <NavBar />
            </div>
            <div className='home-image-zone'>
                <img src='/mmmhomepg.png'/>
            </div>
        </main>
    )
}