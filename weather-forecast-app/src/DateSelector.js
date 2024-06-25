import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ onDateSelect }) => {
    const today = new Date().toISOString().split('T')[0];
    return (
        <div>
            <button onClick={() => onDateSelect(today)}>Today</button>
            or select date:
            {/* Add more buttons for additional dates as needed */}
            <DatePicker selected={today} onChange={(date) => onDateSelect(new Date(date).toISOString().split('T')[0])} />
        </div>
    );
};

export default DateSelector;