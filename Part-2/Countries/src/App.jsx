import { useState, useEffect } from "react";
import axios from "axios";
import Render from "./Render";

const URL = "https://studies.cs.helsinki.fi/restcountries/api";

const App = () => {
    const [allCountries, setAllCountries] = useState(null);
    const [countrySearch, setCountrySearch] = useState(null);

    useEffect(() => {
        axios.get(`${URL}/all`).then((response) => {
            setAllCountries(response.data);
        });
    }, []);

    if (!allCountries) return null;

    const onCountryInput = (e) => {
        setCountrySearch(e.target.value);
    };

    const filterCountries = countrySearch
        ? allCountries.filter((country) =>
              country.name.common
                  .toLowerCase()
                  .includes(countrySearch.toLowerCase()),
          )
        : [];

    console.log(filterCountries);

    return (
        <>
            <p>find contries:</p>
            <input
                type="text"
                value={countrySearch || ""}
                onChange={onCountryInput}
            />
            <Render countries={filterCountries} />
        </>
    );
};

export default App;
