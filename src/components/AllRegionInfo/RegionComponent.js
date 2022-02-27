import React from 'react';
import { Link } from 'react-router-dom';

const RegionComponent = (props) => {
    const region = props.region;

    return (
        <div className="info-box">
            <h1 className='region-title'>{region}</h1>
            <div className="box">
                <Link className='asia link' to={region}>
                    <h1>
                    {
                        (region === 'Asia') ? 'Asian'
                        : (region === 'Europe') ? 'European'
                        : (region === 'Africa') ? 'African'
                        : (region === 'Oceania') ? 'Oceanian'
                        : 'American'
                    } countries</h1>
                    <p>See details</p>
                </Link>
            </div>
        </div>
    );
};

export default RegionComponent;