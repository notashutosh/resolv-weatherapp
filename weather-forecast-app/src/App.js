import React, { useState } from 'react';
import CityInput from './CityInput';
import DateSelector from './DateSelector';

const App = () => {
    const [city, setCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleCityChange = (newCity) => {
        setCity(newCity);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <CityInput onCityChange={handleCityChange} />
            <DateSelector onDateSelect={handleDateSelect} />
            {/* Display the selected city and date for now */}
            <p>Selected City: {city}</p>
            <p>Selected Date: {selectedDate}</p>
        </div>
    );
};

export default App;