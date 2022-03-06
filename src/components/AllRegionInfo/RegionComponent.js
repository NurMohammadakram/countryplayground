import React from 'react';
import { Link } from 'react-router-dom';

const RegionComponent = (props) => {
    const region = props.region;

    return (
        <div className="info-box col-lg-4 col-sm-6">
            <h1 className='region-title'>{region}</h1>
            <Link className='link' to={`/home/${region}`}>
                <div className="card">
                    <div className="card-body">
                        <h1>
                        {
                            (region === 'Asia') ? 'Asian'
                            : (region === 'Europe') ? 'European'
                            : (region === 'Africa') ? 'African'
                            : (region === 'Oceania') ? 'Oceanian'
                            : 'American'
                        } countries</h1>
                        <p className='card-text'>See details</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RegionComponent;