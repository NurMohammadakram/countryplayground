import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import RegionComponent from './RegionComponent';


export const regions = [{id: 0, reg: 'Asia'}, {id: 1, reg: 'Europe'}, {id: 2, reg: 'Africa'}, {id: 3, reg: 'Oceania'}, {id: 4, reg: 'Americas'}];

const AllRegionInfo = () => {
    const [regionList, setRegionList] = useState([]);
    
    useEffect( () => {
        
        setRegionList([...regions]);
    }, []);

    return (
        <div className='home-content my-5'>
            <Container>
                <h1 className='text-center mb-0'>Here, All countries are in Region based</h1>
                <hr className='hr mx-auto' />
                <div className="row flex-wrap">
                    {
                        regionList.map(region => < RegionComponent region={region.reg} key={region.id}/>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllRegionInfo;