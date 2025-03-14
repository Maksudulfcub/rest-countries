import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleAddVisited }) => {
    console.log(country);
    const { name, capital, flags, population, region, timezones } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Country Name : {name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Time Zone : {timezones[0]}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Mark as visited'}</button>
            <button onClick={() =>
                handleAddVisited(country)
            }>Add to Visited List</button>
        </div>
    );
};

export default Country;