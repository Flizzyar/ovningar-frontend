import { useState } from 'react'

export function Temperatur() {
    const [temperatur, setTemperatur] = useState(20)

    const ökaTemperatur = () => {
        setTemperatur(temperatur + 1)
    }

    const minskaTemperatur = () => {
        setTemperatur(temperatur - 1)
    }

    return (
        <section>
            {temperatur > 25 && <p>Det är varmt!</p>}
            {temperatur < 15 && <p>Det är kallt!</p>}
            <h2>Temperatur: {temperatur}°C</h2>
            <button onClick={ökaTemperatur}>Öka</button>
            <button onClick={minskaTemperatur}>Minska</button>
        </section>
    )
}
