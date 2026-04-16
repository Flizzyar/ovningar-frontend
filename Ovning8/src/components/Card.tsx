import List from './List'

interface Recipe {
    namn: string
    ingredienser: string
    tillagningsTid: number
}

function Card({ recipes }: { recipes: Recipe[] }) {
    return (
        <div>
            <h1>Receptkort</h1>
            <List recipes={recipes} />
        </div>
    )
}

export default Card
