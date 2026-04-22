import { useState } from 'react'
import axios from 'axios'
import type { Profile } from '../App'

type Props = {
    profile: Profile
    onSuccess: () => void
}

const EditProfile = ({ profile, onSuccess }: Props) => {
    const [editingUser, setEditingUser] = useState<Profile>(profile)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingUser({ ...editingUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: { preventDefault(): void }) => {
        e.preventDefault()
        await axios.put(
            `http://localhost:3001/api/profiles/${editingUser.id}`,
            editingUser
        )
        onSuccess()
    }

    return (
        <div className="section">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={editingUser.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Age
                    <input
                        type="number"
                        name="age"
                        value={editingUser.age}
                        onChange={handleChange}
                        min={1}
                        required
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditProfile
