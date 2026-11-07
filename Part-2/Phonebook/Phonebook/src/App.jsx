import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const onPersonInput = (e) => {
        setNewName(e.target.value);
    };

    const onPersonAdd = (e) => {
        e.preventDefault();
        const test = persons.reduce((acc, person) => {
            return acc || person.name === newName;
        }, false);
        if (test) {
            alert(`${newName} already exists`);
        } else {
            setPersons((prevPersons) => [...prevPersons, { name: newName }]);
        }
        setNewName("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={onPersonInput} />
                </div>
                <div>
                    <button type="submit" onClick={onPersonAdd}>
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons.map((person) => (
                <p key={person.name}>{person.name}</p>
            ))}
        </div>
    );
};

export default App;
