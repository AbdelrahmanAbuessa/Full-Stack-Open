import { useState } from "react";

const App = () => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [persons, setPersons] = useState([
        { name: "Bandit Heeler", number: "040-123456", id: 1 },
        { name: "Chilli Heeler", number: "39-44-5323523", id: 2 },
        { name: "Diane Foxington", number: "12-43-234345", id: 3 },
        { name: "Tony the Tiger", number: "39-23-6423122", id: 4 },
    ]);
    const [filter, setFilter] = useState("");

    const onPersonInput = (e) => {
        setNewName(e.target.value);
    };
    const onNumberInput = (e) => {
        setNewNumber(e.target.value);
    };
    const onFilterInput = (e) => {
        setFilter(e.target.value);
    };

    const onPersonAdd = (e) => {
        e.preventDefault();
        const test = persons.reduce((acc, person) => {
            return acc || person.name === newName;
        }, false);
        if (test) {
            alert(`${newName} already exists`);
        } else {
            setPersons((prevPersons) => [
                ...prevPersons,
                { name: newName, number: newNumber },
            ]);
        }
        setNewName("");
        setNewNumber("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter: <input value={filter} onChange={onFilterInput} />
            </div>
            <h2>Add New</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={onPersonInput} />
                    <br />
                    number: <input value={newNumber} onChange={onNumberInput} />
                </div>
                <div>
                    <button type="submit" onClick={onPersonAdd}>
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons
                .filter((person) => {
                    return person.name.includes(filter);
                })
                .map((person) => (
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                ))}
        </div>
    );
};

export default App;
