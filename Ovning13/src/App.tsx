import { useState } from 'react'
import type { ChangeEvent } from 'react'

type Task = {
    id: number
    title: string
    done: boolean
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Plugga React', done: false },
        { id: 2, title: 'Läsa om props', done: true }
    ])

    const [newTitle, setNewTitle] = useState<string>('')

    const handleAddTask = () => {
        // Lägg till ny uppgift här
        if (newTitle.trim() !== '') {
            const newTask: Task = {
                id: Date.now(),
                title: newTitle,
                done: false
            }
            setTasks([...tasks, newTask])
            setNewTitle('')
        }
    }

    const handleToggleTask = (id: number) => {
        // Ändra done på rätt uppgift här
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        )
    }

    const handleChangeTitle = (id: number) => {
        // Ändra title på rätt uppgift här
        const newTitle = prompt('Ange ny titel:')
        if (newTitle !== null && newTitle.trim() !== '') {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, title: newTitle } : task
                )
            )
        }
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Uppgiftslista</h1>

            <input
                type="text"
                value={newTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNewTitle(e.target.value)
                }
                placeholder="Ny uppgift"
            />
            <button onClick={handleAddTask}>Lägg till</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>
                            {task.title} - {task.done ? 'Klar' : 'Inte klar'}
                        </span>
                        <button onClick={() => handleToggleTask(task.id)}>
                            Växla status
                        </button>
                        <button onClick={() => handleChangeTitle(task.id)}>
                            Ändra titel
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
