import Form from '../components/AddItemForm'
import { useOutletContext } from 'react-router-dom'
import type { Book } from '../type'

function AddItem() {
    const { setBooks } = useOutletContext<{
        setBooks: React.Dispatch<React.SetStateAction<Book[]>>
    }>()

    return (
        <div>
            <h1>Lägg till en bok</h1>
            <Form setBooks={setBooks} />
        </div>
    )
}

export default AddItem
