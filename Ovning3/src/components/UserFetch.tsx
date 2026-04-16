import { useState, useEffect } from 'react'

function UserFetch() {
    const [users, setUsers] = useState<any[]>([])
    const [count, setCount] = useState<number>(3)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true)

                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                )
                const data = await response.json()

                if (!response.ok) {
                    throw new Error('Kunde inte hämta användare.')
                }

                setUsers(data)
                setLoading(false)
            } catch (err) {
                setError('Error vid hämtning av användare')
            }
        }
        fetchUsers()
    }, [])

    return (
        <div>
            <h1>Användare</h1>

            <label>Antal användare: </label>
            <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
            >
                <option value={3}>3 användare</option>
                <option value={5}>5 användare</option>
                <option value={10}>10 användare</option>
            </select>

            <br />
            <br />

            {loading && <p>Laddar...</p>}
            {error && <p>{error}</p>}

            <ul>
                {users.slice(0, count).map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserFetch
