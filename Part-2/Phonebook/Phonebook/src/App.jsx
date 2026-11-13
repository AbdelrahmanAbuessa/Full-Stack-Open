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
    const [errorMessage, setErrorMessage] = useState(null);

    const makeMessage = (message) => {
        setMessage(message);
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const makeErrorMessage = (message) => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000);
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
                        makeMessage(`${name} was updated with ${newNumber}`);
                    })
                    .catch(() =>
                        makeErrorMessage(`${test.name} was already deleted`),
                    );
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
                makeMessage(`${name} was added`);
            });
            return true;
        }
    };

    const onDelete = (e) => {
        const lookup = persons.find((person) => person.id === e.target.id);

        if (window.confirm(`delete person: ${lookup.name}?`)) {
            backend
                .deleteData(lookup.id)
                .then((data) => {
                    setPersons((prevPersons) => {
                        return prevPersons.filter((person) => {
                            return person.id != data.id;
                        });
                    });
                    makeMessage(`${data.name} was deleted`);
                })
                .catch((error) => {
                    makeErrorMessage(`${lookup.name} was already deleted`);
                });
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
            {errorMessage && <Message message={errorMessage} error />}
            <Filter value={filter} setFilter={setFilter} />
            <h2>Add New</h2>
            <Form addPerson={addPerson} />
            <h2>Numbers</h2>
            <Render persons={persons} onDelete={onDelete} filter={filter} />
        </div>
    );
};

export default App;
