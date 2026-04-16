export const songs: { id: number; title: string; artist: string }[] = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa' }
]

function Songs() {
    return (
        <div>
            <h1>Songs</h1>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <h2>{song.title}</h2>
                        <a href={`/songs/${song.id}`}>View Details</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Songs
