import React from 'react';

const MapComponent = (props) => {
    const maps = props.maps;
    const googleMaps = maps.googleMaps;
    return (
        <div>
            <h1>This is map component which will be used as a component for individual country map</h1>
        </div>
    );
};

export default MapComponent;