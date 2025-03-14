import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [addVisited, setAddVisited] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleAddVisited = (country) => {
        const newVisitedCountries = [...addVisited, country]
        setAddVisited(newVisitedCountries);
    }

    return (
        <div>
            <h2>Total Country : {countries.length}</h2>
            <div>
                <h3>My Visited Country : {addVisited.length}</h3>
                <ul>
                    {
                        addVisited.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} handleAddVisited={handleAddVisited} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;