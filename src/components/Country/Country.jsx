
const Country = ({ country }) => {

    const { name, capital } = country;

    return (
        <div>
            <h3>Country Name : {name.common}</h3>
            <p>Capital : {capital}</p>
        </div>
    );
};

export default Country;