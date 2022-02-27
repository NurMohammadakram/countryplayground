import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetailsInfo.css';

const CountryDetailsInfo = (props) => {
    const {name, capital, area, region, population, flags, cca3} = props.country;
    return (
        <div className='country-card'>
            <div className="flag">
                <img src={flags['png']} alt="" />
            </div>
            <div className="country-info">
                <h3>{name['official']}</h3>
                <h4>Common name: {name['common']}</h4>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <p>area: {area}</p>
                <p>capital: {capital}</p>
                <Link to={`country/${name['common']}/${cca3}`} ><button>See details information</button></Link>
            </div>
        </div>
    );
};

export default CountryDetailsInfo;