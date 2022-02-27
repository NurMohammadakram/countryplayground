import React, { useEffect, useState } from 'react';
import CountryDetailsInfo from '../CountryDetailsInfo/CountryDetailsInfo';

const AsiaCountries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [countries]);

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>This is Asia</h1>
            <div className="card-container">
                {
                    countries.map(country => <CountryDetailsInfo country={country} key={country.cca3}/>)
                }
            </div>
        </div>
    );
};

export default AsiaCountries;