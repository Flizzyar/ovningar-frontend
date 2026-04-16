import Card from './card'
import type { User } from '../types'

export default function Users({
    loading,
    users,
    error
}: {
    loading: boolean
    users: User[]
    error: string | null
}) {
    return (
        <div className="userGrid">
            {loading && <p>Loading...</p>}
            {!loading && users.length === 0 && <p>No users found</p>}
            {users.map((user) => (
                <Card key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                </Card>
            ))}
            {error && <p>{error}</p>}
        </div>
    )
}
