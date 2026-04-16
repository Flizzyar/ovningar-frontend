import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Card from './components/Card'

interface Recipe {
    namn: string
    ingredienser: string
    tillagningsTid: number
}

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    return (
        <>
            <Form setRecipes={setRecipes} />
            <Card recipes={recipes} />
        </>
    )
}

export default App
