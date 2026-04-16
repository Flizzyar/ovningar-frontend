interface Recipe {
    namn: string
    ingredienser: string
    tillagningsTid: number
}

interface ListProps {
    recipes: Recipe[]
}

function List({ recipes }: ListProps) {
    return (
        <div>
            <h2>Recept</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h3>{recipe.namn}</h3>
                        <p>Ingredienser: {recipe.ingredienser}</p>
                        <p>Tillagnings tid: {recipe.tillagningsTid} min</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
