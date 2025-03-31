import React from 'react';
import {useState} from "react";

import {FaSearch} from "react-icons/fa";
function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => setIsOpen(!isOpen);
    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"
            style={{cursor:"pointer"}}
            onClick={toggleSearch}/>
            {isOpen && <input type="text" placeholder='Поиск...'
            className='search-input'/>}
        </div>
    );
}

export default SearchBar;