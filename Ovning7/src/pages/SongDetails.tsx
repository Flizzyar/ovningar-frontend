import { useParams } from 'react-router-dom'
import { songs } from './Songs'

export default function SongDetails() {
    const { id } = useParams()
    const song = songs.find((song) => song.id === Number(id))

    if (!song) {
        return <p>Song not found</p>
    }

    return (
        <div>
            <h1>Song Details</h1>
            <h2>{song.title}</h2>
            <p>Artist: {song.artist}</p>
        </div>
    )
}
