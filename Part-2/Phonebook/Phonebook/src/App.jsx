import { useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Render from "./Render";

const App = () => {
    const [filter, setFilter] = useState("");

    const [persons, setPersons] = useState([
        { name: "Bandit Heeler", number: "040-123456", id: 1 },
        { name: "Chilli Heeler", number: "39-44-5323523", id: 2 },
        { name: "Diane Foxington", number: "12-43-234345", id: 3 },
        { name: "Tony the Tiger", number: "39-23-6423122", id: 4 },
    ]);

    const addPerson = ({ name, number }) => {
        const test = persons.reduce((acc, person) => {
            return acc || person.name === name;
        }, false);

        if (test) {
            alert(`${name} already exists`);
        } else {
            setPersons((prevPersons) => [...prevPersons, { name, number }]);
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} setFilter={setFilter} />
            <h2>Add New</h2>
            <Form addPerson={addPerson} />
            <h2>Numbers</h2>
            <Render persons={persons} filter={filter} />
        </div>
    );
};

export default App;
