import './Country.css'

const Country = ({ country }) => {
    console.log(country);
    const { name, capital, flags, population, region,timezones } = country;

    return (
        <div className='country'>
            <h3>Country Name : {name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Time Zone : {timezones[0]}</p>
        </div>
    );
};

export default Country;