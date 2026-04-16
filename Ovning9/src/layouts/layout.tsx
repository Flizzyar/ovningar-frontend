import { Link, Outlet } from 'react-router-dom'
import type { Book } from '../type'
import { useState } from 'react'

function RootLayout() {
    const [books, setBooks] = useState<Book[]>([])
    return (
        <div>
            <nav style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <Link to="/">Home</Link>
                <Link to="/add-item">Lägg till bok</Link>
                <Link to="/list-items">Böcker</Link>
            </nav>

            <Outlet context={{ books, setBooks }} />
        </div>
    )
}

export default RootLayout
