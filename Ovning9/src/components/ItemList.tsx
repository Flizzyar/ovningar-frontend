import type{ Book } from '../type'

interface ListProps {
    books: Book[]
}

function List({ books }: ListProps) {
    return (
        <div>
            <h2>Bok</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <h3>{book.namn}</h3>
                        <p>Författare: {book.författare}</p>
                        <p>Genre: {book.genre}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
