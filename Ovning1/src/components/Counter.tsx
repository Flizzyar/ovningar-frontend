import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0)

    const öka = () => {
        setCount(count + 1)
    }
    const minska = () => {
        setCount(count - 1)
    }

    return (
        <section>
           <p>Count: {count}</p>
            <button onClick={öka}>Öka</button>
            <button onClick={minska}>Minska</button>
        </section>
    )
}
