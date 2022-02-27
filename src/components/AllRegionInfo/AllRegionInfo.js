import React, { useEffect, useState } from 'react';
import './AllRegionInfo.css';
import RegionComponent from './RegionComponent';

const AllRegionInfo = () => {
    const [regionList, setRegionList] = useState([]);
    
    useEffect( () => {
        const region = [{id: 0, reg: 'Asia'}, {id: 1, reg: 'Europe'}, {id: 2, reg: 'Africa'}, {id: 3, reg: 'Oceania'}, {id: 4, reg: 'Americas'}];
        setRegionList([...region]);
    }, []);

    return (
        <div>
            <h1 className='title'>Here, All countries are in Region based</h1>
            <hr className='hr' />
            <div className="countries-container">
                {
                    regionList.map(region => < RegionComponent region={region.reg} key={region.id}/>)
                }
            </div>
        </div>
    );
};

export default AllRegionInfo;