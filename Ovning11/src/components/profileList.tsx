import type { Profile } from '../App'

type Props = {
    profiles: Profile[]
    onEdit: (profile: Profile) => void
    onDelete: (id: number) => void
}

const ProfileList = ({ profiles, onEdit, onDelete }: Props) => {


    if (profiles.length === 0) {
        return (
            <div className="profile-list">
                <h2>Profiles</h2>
                <p className="empty">No profiles yet.</p>
            </div>
        )
    }

    return (
        <div className="profile-list">
            <h2>Profiles</h2>
            <div className="cards">
                {profiles.map((p) => (
                    <div key={p.id} className="card">
                        <img src={p.imageUrl} alt={p.name} />
                        <div className="card-info">
                            <strong>{p.name}</strong>
                            <span>Age: {p.age}</span>
                        </div>
                        <button onClick={() => onEdit(p)}>Edit</button>
                        <button onClick={() => onDelete(p.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileList
