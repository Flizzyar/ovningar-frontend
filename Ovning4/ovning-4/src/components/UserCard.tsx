import type { User } from "../App"

type UserCardProps = {
    user: User
    ShowDetails: (name: string) => void
}

function UserCard({ user, ShowDetails }: UserCardProps) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <button onClick={() => ShowDetails(user.name)}>Info</button>
        </div>
    )
}

export default UserCard
