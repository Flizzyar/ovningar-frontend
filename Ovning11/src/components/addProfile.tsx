import { useRef, useState } from 'react'
import axios from 'axios'

type Props = {
    onSuccess: () => void
}

const AddProfile = ({ onSuccess }: Props) => {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [image, setImage] = useState<File | string>('')
    const [error, setError] = useState<string>('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: { preventDefault(): void }) => {
        e.preventDefault()
        setError('')

        const formData = new FormData()
        formData.append('name', name)
        formData.append('age', age)
        formData.append('image', image)

        try {
            const res = await axios.post(
                'http://localhost:3001/api/profiles',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            )

            if (res.status !== 201) {
                setError('Failed to add profile.')
                return
            }

            setName('')
            setAge('')
            if (fileInputRef.current) fileInputRef.current.value = ''
            onSuccess()
        } catch {
            setError('Could not connect to server.')
        }
    }

    return (
        <div className="section">
            <h2>Add Profile</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Age
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min={1}
                        required
                    />
                </label>
                <label>
                    Image
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={(e) => setImage(e.target.files?.[0] || '')}
                        required
                    />
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit">Add Profile</button>
            </form>
        </div>
    )
}

export default AddProfile
