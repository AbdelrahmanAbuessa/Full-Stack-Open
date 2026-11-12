import { useState, useEffect } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Render from "./Render";

import backend from "./backend.js";

const App = () => {
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([]);

    const addPerson = ({ name, number, id }) => {
        const test = persons.reduce((acc, person) => {
            return acc || person.name === name;
        }, false);

        if (test) {
            alert(`${name} already exists`);
        } else {
            setPersons((prevPersons) => [...prevPersons, { name, number, id }]);
        }
    };

    const onDelete = (e) => {
        if (window.confirm(`delete person with id: ${e.target.id}?`)) {
            backend.deleteData(e.target.id).then(() =>
                setPersons((prevPersons) => {
                    return prevPersons.filter((person) => {
                        return person.id != e.target.id;
                    });
                }),
            );
        }
    };

    useEffect(() => {
        backend.getData().then((data) => {
            setPersons(data);
        });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} setFilter={setFilter} />
            <h2>Add New</h2>
            <Form addPerson={addPerson} />
            <h2>Numbers</h2>
            <Render persons={persons} onDelete={onDelete} filter={filter} />
        </div>
    );
};

export default App;
