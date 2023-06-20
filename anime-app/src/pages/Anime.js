import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaAnimeBrowse from "../components/Media/MediaAnimeBrowse.js";
import BrowseOptions from "../components/hooks/BrowseOptions.js";
import classes from "./Anime.module.css";
import { useLocation } from "react-router-dom";

// Anime page
function Anime() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sortBy, setSortBy] = useState("POPULARITY_DESC");
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const handleGenreChange = (selectedGenres) => {
        setSelectedGenres(selectedGenres);
    };
    const handleSortByChange = (selectedSortBy) => {
        setSortBy(selectedSortBy);
    };
    const handleSearchChange = (query) => {
        setSearchQuery(query);
        console.log(query)
      };

    const handleMediaClick = (mediaId) => {
        navigate(`/anime/${mediaId}`);
    };
    const handleToggleOptions = () => {
        const browseOptions = document.getElementById("browseOptions");
        browseOptions.classList.toggle(classes.browseOptionsVisible);
    };
    return (
        <section className={classes.content}>
            <div className={classes.filterOptions}>
                <div
                    className={classes.filterHeader}
                    onClick={handleToggleOptions}
                >
                    Filter
                </div>
            </div>
            <div id="browseOptions" className={classes.browseOptions}>
                <BrowseOptions
                    onGenreChange={handleGenreChange}
                    onSortByChange={handleSortByChange}
                    onSearchChange={handleSearchChange} 
                />
            </div>

            <div className={classes.div}>
                <MediaAnimeBrowse
                    selectedGenres={selectedGenres}
                    sortBy={sortBy}
                    searchQuery={searchQuery}
                    onMediaClick={handleMediaClick}
                />
            </div>
        </section>
    );
}

export default Anime;
