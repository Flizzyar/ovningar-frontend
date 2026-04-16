import { useState } from 'react'

interface FormData {
    namn: string
    ingredienser: string
    tillagningsTid: number
}

interface FormProps {
    setRecipes: React.Dispatch<React.SetStateAction<FormData[]>>
}

function Form({ setRecipes }: FormProps) {
    const [formData, setFormData] = useState<FormData>({
        namn: '',
        ingredienser: '',
        tillagningsTid: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'tillagningsTid' ? Number(value) : value
        }))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        setRecipes((prev) => [...prev, formData])

        setFormData({
            namn: '',
            ingredienser: '',
            tillagningsTid: 0
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

            <label htmlFor="ingredienser">Ingredienser:</label>
            <input
                type="text"
                id="ingredienser"
                name="ingredienser"
                value={formData.ingredienser}
                onChange={handleChange}
            />

            <label htmlFor="tillagningstid">Tillagnings tid (min):</label>
            <input
                type="number"
                id="tillagningstid"
                name="tillagningsTid"
                value={formData.tillagningsTid}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
