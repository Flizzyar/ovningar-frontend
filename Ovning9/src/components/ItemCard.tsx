import List from './ItemList'
import type { Book } from '../type'

function Card({ books }: { books: Book[] }) {
    return (
        <div>
            <h1>Bokkort</h1>
            <List books={books} />
        </div>
    )
}

export default Card
