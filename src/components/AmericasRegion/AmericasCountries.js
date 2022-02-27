import React, {useState, useEffect} from 'react';
import CountryDetailsInfo from '../CountryDetailsInfo/CountryDetailsInfo';

const AmericasCountries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/region/americas')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>This is America</h1>
            <div className="card-container">
                {
                    countries.map(country => <CountryDetailsInfo country={country} key={country.cca3}/>)
                }
            </div>
        </div>
    );
};

export default AmericasCountries;