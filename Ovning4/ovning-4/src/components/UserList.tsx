import UserCard from "./UserCard";
import type { User } from "../App"

type UserListProps = {
    users: User[]
    ShowDetails: (name: string) => void
}

function UserList({ users, ShowDetails }: UserListProps) {
    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} ShowDetails={ShowDetails} />
            ))}
        </div>
    )
}

export default UserList
