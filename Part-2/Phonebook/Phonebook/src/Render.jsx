const Render = ({ persons, filter, onDelete }) => {
    return (
        <>
            {persons
                .filter((person) => {
                    return person.name.toLowerCase().includes(filter);
                })
                .map((person) => (
                    <p key={person.name}>
                        {person.name} {person.number}
                        <button id={person.id} onClick={onDelete}>
                            delete
                        </button>
                    </p>
                ))}
        </>
    );
};

export default Render;
