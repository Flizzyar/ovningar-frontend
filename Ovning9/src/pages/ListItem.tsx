import { useOutletContext } from 'react-router-dom'
import type { Book } from '../type'
import Card from '../components/ItemCard'

function ListItem() {
    const { books } = useOutletContext<{
        books: Book[]
    }>()

    return <Card books={books} />
}

export default ListItem
