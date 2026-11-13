import { useState, useEffect } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Render from "./Render";
import Message from "./Message.jsx";

import backend from "./backend.js";

const App = () => {
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([]);
    const [message, setMessage] = useState(null);

    const makeMessage = (error, message) => {
        if (!error) {
            setMessage(message);
            setTimeout(() => {
                setMessage(null);
            }, 5000);
        }
    };

    const addPerson = ({ name, number }) => {
        const test = persons.find(
            (person) => person.name.toLowerCase() === name.toLowerCase(),
        );

        if (test) {
            const newNumber = number;
            const { id } = test;
            if (window.confirm(`modify person?`)) {
                backend
                    .mutateData(id, {
                        name,
                        number: newNumber,
                        id,
                    })
                    .then(() => {
                        setPersons((prevPersons) =>
                            prevPersons.map((person) =>
                                person.id === id
                                    ? { ...person, number: newNumber }
                                    : person,
                            ),
                        );
                        makeMessage(
                            false,
                            `${name} was updated with ${newNumber}`,
                        );
                    });
                return true;
            } else {
                return false;
            }
        } else {
            backend.sendData({ name, number }).then(({ name, number, id }) => {
                setPersons((prevPersons) => [
                    ...prevPersons,
                    { name, number, id },
                ]);
                makeMessage(false, `${name} was added`);
            });
            return true;
        }
    };

    const onDelete = (e) => {
        if (window.confirm(`delete person with id: ${e.target.id}?`)) {
            backend.deleteData(e.target.id).then(() =>
                setPersons((prevPersons) => {
                    return prevPersons.filter((person) => {
                        if (person.id === e.target.id) {
                            makeMessage(false, `${person.name} was deleted`);
                        }
                        return person.id != e.target.id;
                    });
                }),
            );
        }
    };

    useEffect(() => {
        backend.getData().then((data) => {
            console.log(data);
            setPersons(data);
        });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            {message && <Message message={message} />}
            <Filter value={filter} setFilter={setFilter} />
            <h2>Add New</h2>
            <Form addPerson={addPerson} />
            <h2>Numbers</h2>
            <Render persons={persons} onDelete={onDelete} filter={filter} />
        </div>
    );
};

export default App;
