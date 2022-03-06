import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
// import {data} from '../../asset/data';
import MapComponent from './MapComponent';
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
        
    }, [code]);

    return (
        <Container className='my-md-5 my-3'>
            <Link to='/' className='back-btn mb-3'>&larr; Back</Link>
            {
                isLoading && !error && (
                <div className='mx-auto my-5 text-center'>
                    <h2>Loading.......</h2>
                    <p>wait a few moment..</p>
                </div>
                )
            }

            {
                country?.map( (country) => {
                    const {name, area, region, subregion, population, capital, flags, timezones, landlocked, latlng, demonyms, maps, cca3, ccn3, independent} = country;
                    
                    return (
                        <div key= {cca3}>
                            <div className="single-country-info-container">
                                <div className="head-info row my-3">
                                    <div className="c-n text-white text-center col me-3 my-auto">
                                        <h1 style={{marginTop: '0'}}>{name['official']}</h1>
                                    </div>
                                    <div className="flag-big col  text-center">
                                        <img className="" src={flags['png']} alt="" />
                                        <span className='h6' >{name['common']}</span>
                                    </div>
                                </div>
                
                                <div className="details-info d-flex justify-content-around my-lg-5 my-3 pt-lg-5 pt-3">
                                    <div className="pe-3">
                                        <p>Common name: <span className='h5' >{name['common']}</span></p>
                                        <p>Region: {region}</p>
                                        <p>subregeion: {subregion}</p>
                                        <p>Population: {population}</p>
                                        <p>area: {area} squre km</p>
                                        <p>capital: {capital}</p>
                                        <p>{timezones}</p>
                                    </div>
                                    <div className="ps-3">
                                        <p>landlocked: {landlocked.toString()}</p>
                                        <p>demonyms: {demonyms.eng.f}</p>
                                        <p>latlng: {`${latlng[0]}, ${latlng[1]}`}</p>
                                        <p>code: {cca3}</p>
                                        <p>ccn: {ccn3}</p>
                                        <p>Independent: {independent.toString()}</p>
                                    </div>
                                </div>
                            </div>
                            <Container className="maps">
                                <MapComponent maps={maps}/>
                            </Container>
                        </div>
                    )
                })
            }   
        </Container>
    );
};

export default SingleCountryInfo;