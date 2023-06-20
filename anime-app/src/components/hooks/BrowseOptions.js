import React, { useState, useEffect } from "react";
import SortBySelect from "./SortBySelect";
import classes from "./BrowseOptions.module.css";
import GenreList from "./GenreList";
import SearchBar from "./SearchBar";
function BrowseOptions({ onGenreChange, onSortByChange, onSearchChange }) {
    return (
        <div className={classes.browseOptionsContainer}>
            <div>
                <h2>Genres:</h2>
                <GenreList onGenreChange={onGenreChange} />
            </div>
            <div>
                <SearchBar onSearchChange={onSearchChange} />{" "}
                {/* Render the SearchBar component */}
            </div>
            <div>
                <SortBySelect onSortByChange={onSortByChange} />
            </div>
            
        </div>
    );
}

export default BrowseOptions;
