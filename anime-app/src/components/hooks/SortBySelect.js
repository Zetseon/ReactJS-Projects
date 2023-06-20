import React from "react";
import { useState, useEffect } from "react";
import classes from './SortBySelect.module.css'
function SortBySelect({onSortByChange }) {
  const [sortBy, setSortBy] = useState("POPULARITY_DESC");

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
};
useEffect(() => {
  onSortByChange(sortBy);
}, [sortBy, onSortByChange]);

  return (
    <div>
    <h2>Sort By:</h2>
    <select value={sortBy} onChange={handleSortByChange} className={classes.selectStyle}>
      <option value="POPULARITY_DESC">
        
        Popularity
      </option>
      <option value="TRENDING_DESC">
       
        Trending
      </option>
      <option value="TITLE_ROMAJI">
        
        Title
      </option>
      {/* Add more sort options as needed */}
    </select>
  </div>
  );
}

export default SortBySelect;
