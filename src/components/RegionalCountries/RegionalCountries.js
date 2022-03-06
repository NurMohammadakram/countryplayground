import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { regions } from '../AllRegionInfo/AllRegionInfo';
import NotFound from '../NotFound';
import CountryComponent from './CountryComponent';

const RegionalCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState('');
    
    const { Region } = useParams();
    const filteredRegion = regions.find(region => region.reg === Region);
    console.log(filteredRegion);

    useEffect( () => {
        const getCountries = async() => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/region/${filteredRegion.reg.toLowerCase()}`)
                if (!res.ok) throw new Error('Not Found the country!')
                const data = await res.json()
                setCountries(data)
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.messege);
            }
        }
        getCountries();

    }, [filteredRegion]);

    return (
        <Container>
            {
                filteredRegion ? 
                    <div>
                        <h1 style={{textAlign: 'center', marginTop: '30px'}}>This is {filteredRegion ? filteredRegion.reg: ''}</h1>
                        <hr className='mx-auto mb-5' style={{width: '300px', height: '1.5px'}} />
                    </div> 
                    : <NotFound />
            }
            
            {
                isLoading && !error && (
                <div className='mx-auto my-5 text-center'>
                    <h2>Loading.......</h2>
                    <p>wait a few moment..</p>
                </div>
                )
            }
            
            <div className="row flex-wrap">
                {
                    countries?.map(country => <CountryComponent country={country} key={country.cca3}/>)
                }
            </div>
        </Container>
    );
};

export default RegionalCountries;