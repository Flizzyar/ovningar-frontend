import './App.css'
import { useEffect, useState } from 'react'
import Users from './components/users'

import type { User } from './types'
import Search from './components/search'
import { useDebounce } from 'use-debounce'

function App() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [debouncedSearch] = useDebounce(search, 500)

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        } catch (error) {
            setError('Failed to fetch users')
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )

    return (
        <>
            <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Users loading={loading} users={filteredUsers} error={error} />
        </>
    )
}

export default App
