const Country = ({ country }) => {
    console.log(country);

    return (
        <>
            <h1>{country.name.common}</h1>
            <h3>Capital: </h3>
            <p>{country.capital[0]}</p>
            <h3>Area: </h3>
            <p>{country.area}</p>

            <img
                src={country.flags.svg}
                width={300}
                alt={`flag of ${country.name.common}`}
            />
        </>
    );
};

export default Country;
