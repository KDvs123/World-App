import axios from "axios";
const COUNTRY_API_ENDPOINT = "https://restcountries.com/v2";
export function getAllCountries() {
  //call API & get the result
  return axios.get(`${COUNTRY_API_ENDPOINT}/all`);
}

export function getCountryDetail(countryCode){
    
     return axios.get(`${COUNTRY_API_ENDPOINT}/alpha/${countryCode}`);
}