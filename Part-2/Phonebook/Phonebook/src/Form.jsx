import { useState } from "react";

import backend from "./backend.js";

const Form = ({ addPerson }) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const onNameInput = (e) => {
        setNewName(e.target.value);
    };
    const onNumberInput = (e) => {
        setNewNumber(e.target.value);
    };

    const onPersonAdd = (e) => {
        e.preventDefault();
        const newPerson = { name: newName, number: newNumber };
        backend.sendData(newPerson).then((response) => addPerson(response));
        setNewName("");
        setNewNumber("");
    };

    return (
        <form onSubmit={onPersonAdd}>
            <div>
                name: <input value={newName} onChange={onNameInput} />
                <br />
                number: <input value={newNumber} onChange={onNumberInput} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default Form;
