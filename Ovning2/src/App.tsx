import { ProfileCard } from './components/ProfileCard'
import { Temperatur } from './components/Temperature'
import { useEffect, useState } from 'react'

function App() {
    useEffect(() => {
        console.log('Projektet är igång')
    }, [])

    const [showProfile, setShowProfile] = useState(true)

    return (
        <section>
            <h1>Rubrik</h1>
            <button onClick={() => setShowProfile (!showProfile)}>
                {showProfile ? 'Dölj profil' : 'Visa profil'}
            </button>
            {showProfile && <ProfileCard name="Felisia" job="Developer" city="Stockholm" />}
            <Temperatur />
        </section>
    )
}

export default App
