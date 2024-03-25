import CountryCard from "../Components/CountryCard";
import "./Home.css";
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    getAllCountries()
      .then((result) => {
        const countries = result.data;
        setCountriesList(countries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="country-card-wrapper">
        {countriesList.map((country) => (
          <Link to={`/countries/${country.alpha3Code}`} key={country.alpha3Code} style={{textDecoration:'none'}}>
            <CountryCard
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.png}
              key={country.alpha3Code}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
