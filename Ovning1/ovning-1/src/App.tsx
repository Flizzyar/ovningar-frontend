import { Counter } from './components/Counter'
import { User } from './components/UserCard'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        console.log('Projektet är igång!')
    }, [])

    return (
        <section>
            <h1>Rubrik</h1>

            <User name="Felisia" age={29} email="felisia@example.com" />

            <Counter />
        </section>
    )
}

export default App
