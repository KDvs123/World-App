import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../Services";
import "./CountryDetail.css";

export default function CountryDetail(props) {
  const { countryCode } = useParams();
  const [detail, setDetail ] = useState({});
  useEffect(() => {
    getCountryDetail(countryCode).then((result) => {
      console.log("result.data", result.data);
      setDetail(result.data);
    });
  }, [countryCode]);
  return (
    <div className="country-detail-wrapper">
      <div>
        <img src={detail.flags?.png} alt={detail.name} />
      </div>
      <div>
        <div>Name: {detail.name}</div>
        <div>Population: {detail.population}</div>
        <div>Currencies: {detail.currencies?.map(currency=> currency.name

        ).join(',')}</div>
        <div>Capital: {detail.capital}</div>
        
      </div>
    </div>
  );
}
