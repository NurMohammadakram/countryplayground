import React from 'react';
import { Link } from 'react-router-dom';

const CountryComponent = (props) => {
    const {name, capital, region, population, flags, cca3} = props.country;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className="card card-style">
                <div className="flag">
                    <img className='img-fluid' src={flags['png']} alt="" />
                </div>
                <div className="card-body">
                    <h5>{name['official']}</h5>
                    <p>Region: {region}</p>
                    <p>capital: {capital}</p>
                    <p>Population: {population}</p>
                </div>
                <div className="card-footer text-center">
                    <Link to={`country/${name['common']}/${cca3}`} ><button className='btn btn-primary text-white'>See details info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CountryComponent;