import UserList from "./components/UserList"

export type User = {
    id: number
    name: string
    email: string
    city: string
}

function App() {
    const users: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com", city: "Stockholm" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", city: "Uppsala" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", city: "Malmö" }
    ];

    const showDetails = (name: string) => {
        alert(`Användare: ${name}`);
    };

    return <UserList users={users} ShowDetails={showDetails} />;
}

export default App
