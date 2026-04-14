export function ProfileCard({ name, job, city }: { name: string, job: string, city: string }) {
    return (
        <section>
            <h2>{name}</h2>
            <p>Job: {job}</p>
            <p>City: {city}</p>
        </section>
    );
}
