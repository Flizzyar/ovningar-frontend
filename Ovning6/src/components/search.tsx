export default function Search({value, onChange}: {value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {

    return (
        <div className="search">
            <h2>Search</h2>
            <input
                type="text"
                name="search"
                value={value}
                placeholder="Search..."
                onChange={onChange}
            />
        </div>
    )
}
