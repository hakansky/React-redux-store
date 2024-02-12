import {useEffect, useState} from "react";
import './SortDropDown.css';

const SortDropdown = ({ options, defaultOption, SortChange }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        SortChange(selectedValue);
    };

    return (
        <select className='SortDropDown' value={selectedOption} onChange={handleSortChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SortDropdown;
