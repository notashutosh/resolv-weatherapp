import React from 'react';

const CityInput = ({ onCityChange }) => {
    return (
        <input
            type="text"
            placeholder="Enter city name"
            onChange={e => onCityChange(e.target.value)}
        />
    );
};

export default CityInput;