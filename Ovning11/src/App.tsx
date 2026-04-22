import { useState, useEffect } from 'react'
import './App.css'
import AddProfile from './components/addProfile'
import ProfileList from './components/profileList'
import EditProfile from './components/editProfile'

export type Profile = {
    id: number
    name: string
    age: number
    imageUrl: string
}

const API = 'http://localhost:3001/api/profiles'

function App() {
    const [profiles, setProfiles] = useState<Profile[]>([])
    const [editingProfile, setEditingProfile] = useState<Profile | null>(null)

    const fetchProfiles = () => {
        fetch(API)
            .then((res) => res.json())
            .then(setProfiles)
            .catch(console.error)
    }

    const handleDelete = (id: number) => {
        fetch(`${API}/${id}`, { method: 'DELETE' })
            .then(fetchProfiles)
            .catch(console.error)
    }

    useEffect(() => {
        fetchProfiles()
    }, [])

    return (
        <div className="app">
            <h1>Profile Management</h1>
            <div className="sections">
                {editingProfile ? (
                    <EditProfile
                        profile={editingProfile}
                        onSuccess={() => {
                            setEditingProfile(null)
                            fetchProfiles()
                        }}
                    />
                ) : (
                    <AddProfile onSuccess={fetchProfiles} />
                )}
            </div>
            <ProfileList
                profiles={profiles}
                onEdit={setEditingProfile}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default App
