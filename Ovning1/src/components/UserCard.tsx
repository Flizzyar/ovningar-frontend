export function User({
    name,
    age,
    email
}: {
    name: string
    age: number
    email: string
}) {
    return (
        <section>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </section>
    )
}
