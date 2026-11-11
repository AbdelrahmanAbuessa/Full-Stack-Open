import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Form from "./Form";
import Render from "./Render";

const App = () => {
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([]);

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

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
        });
    }, []);

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
