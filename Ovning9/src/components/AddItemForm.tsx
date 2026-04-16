import { useState } from 'react'

interface FormData {
    namn: string
    författare: string
    genre: string
}

interface FormProps {
    setBooks: React.Dispatch<React.SetStateAction<FormData[]>>
}

function Form({ setBooks }: FormProps) {
    const [formData, setFormData] = useState<FormData>({
        namn: '',
        författare: '',
        genre: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBooks((prev) => [...prev, formData])
        alert('Boken har lagts till!')

        setFormData({
            namn: '',
            författare: '',
            genre: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="namn">Namn:</label>
            <input
                type="text"
                id="namn"
                name="namn"
                value={formData.namn}
                onChange={handleChange}
            />

            <label htmlFor="författare">Författare:</label>
            <input
                type="text"
                id="författare"
                name="författare"
                value={formData.författare}
                onChange={handleChange}
            />

            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
