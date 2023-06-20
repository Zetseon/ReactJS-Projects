import React, { useState } from "react";
import classes from './SearchBar.module.css'
function SearchBar({ onSearchChange }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setTimeout(() => {
            onSearchChange(query);
        }, 1000); // Adjust the timeout duration as needed
    };

    return (
        <div className={classes.search}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </div>
    );
}

export default SearchBar;
