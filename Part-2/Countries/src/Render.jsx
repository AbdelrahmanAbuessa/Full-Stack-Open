import Country from "./Country";

const Render = ({ countries }) => {
    return countries.length > 10 ? (
        <div>Too many matches, use something more specific</div>
    ) : countries.length <= 10 && countries.length > 1 ? (
        countries.map((country) => (
            <div key={country.ccn3}>{country.name.common}</div>
        ))
    ) : countries.length === 1 ? (
        <Country country={countries[0]} />
    ) : null;
};

export default Render;
