import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import {data} from '../../asset/data';
import MapComponent from '../MapComponent/MapComponent';
import './SingleCountryInfo.css';

const SingleCountryInfo = () => {
    const {code} = useParams();
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState('');

    /*
    const obj = data.find(country => country.cca3 === code);
    const {name, area, region, subregion, population, capital, flags, timezones, landlocked, latlng, demonyms, maps, cca3, ccn3, independent} = obj;
    */

    
    
    // const {name, area, region, subregion, population, capital, flags, timezones, landlocked, latlng, demonyms, maps, cca3, ccn3, independent} = country;
    useEffect(() => {
        /*
        const getCountryDetails = async() => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                if (!res.ok) throw new Error('Not Found the country!')
                const data = await res.json()
                setCountry(data)
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.messege);
            }
        }

        getCountryDetails();
        */
        
        
        const url = `https://restcountries.com/v3.1/alpha/${code}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
        .catch(err => setError(err))
        setIsLoading(false);
        
    }, [code]);
    console.log(country)

    return (
        <div>
            <h1 className='title'>this is  Each country total general information!</h1>
            <Link to='/' className='back-btn'>&larr; Back</Link>
            {
                isLoading && !error && <h3 style={{texAlign: 'center'}}>Loading.......</h3>
            }
            {
                error && !isLoading && <h3>{error}</h3>
            }
            {
                country?.map( (country) => {
                    const {name, area, region, subregion, population, capital, flags, timezones, landlocked, latlng, demonyms, maps, cca3, ccn3, independent} = country;
                    console.log(latlng);
                    return (
                        <div key= {cca3}>
                            <div className="container">
                                <div className="head-info">
                                    <div className="country-info">
                                        <h1 style={{marginTop: '0'}}>{name['official']}</h1>
                                        <h2>Common name: {name['common']}</h2>
                                    </div>
                                    <div className="flag-big">
                                        <img src={flags['png']} alt="" />
                                    </div>
                                </div>
                                <div className="details-info">
                                    <div className="first-col">
                                        <p>Region: {region}</p>
                                        <p>subregeion: {subregion}</p>
                                        <p>Population: {population}</p>
                                        <p>area: {area} squre km</p>
                                        <p>capital: {capital}</p>
                                        <p>{timezones}</p>
                                    </div>
                                    <div className="second-col">
                                        <p>landlocked: {landlocked.toString()}</p>
                                        <p>demonyms: {demonyms.eng.f}</p>
                                        <p>latlng: {`${latlng[0]}, ${latlng[1]}`}</p>
                                        <p>code: {cca3}</p>
                                        <p>ccn: {ccn3}</p>
                                        <p>Independent: {independent.toString()}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="maps">
                                <MapComponent maps={maps}/>
                            </div>
                        </div>
                    )
                })
            }   
        </div>
    );
};

export default SingleCountryInfo;