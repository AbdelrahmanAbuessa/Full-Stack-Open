const Filter = ({ value, setFilter }) => {
    const onFilterInput = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            filter: <input value={value} onChange={onFilterInput} />
        </div>
    );
};

export default Filter;
