import React, { Component } from "react";
import GenreCheckbox from "./GenreCheckbox";
import classes from './GenreList.module.css'
import { useState, useEffect } from "react";
function GenreList({ onGenreChange }) {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedGenres((prevSelectedGenres) => [
                ...prevSelectedGenres,
                value,
            ]);
        } else {
            setSelectedGenres((prevSelectedGenres) =>
                prevSelectedGenres.filter((genre) => genre !== value)
            );
        }
    };
    useEffect(() => {
        onGenreChange(selectedGenres);
    }, [selectedGenres, onGenreChange]);
    return (
        <div className={classes.genreList}>
            <GenreCheckbox
                genre="Action"
                checked={selectedGenres.includes("Action")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Adventure"
                checked={selectedGenres.includes("Adventure")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Comedy"
                checked={selectedGenres.includes("Comedy")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Drama"
                checked={selectedGenres.includes("Drama")}
                onChange={handleGenreChange}
            />

            <GenreCheckbox
                genre="Ecchi"
                checked={selectedGenres.includes("Ecchi")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Fantasy"
                checked={selectedGenres.includes("Fantasy")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Horror"
                checked={selectedGenres.includes("Horror")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Mahou Shoujo"
                checked={selectedGenres.includes("Mahou Shoujo")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Mecha"
                checked={selectedGenres.includes("Mecha")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Music"
                checked={selectedGenres.includes("Music")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Mystery"
                checked={selectedGenres.includes("Mystery")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Psychological"
                checked={selectedGenres.includes("Psychological")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Romance"
                checked={selectedGenres.includes("Romance")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Sci-Fi"
                checked={selectedGenres.includes("Sci-Fi")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Slice of Life"
                checked={selectedGenres.includes("Slice of Life")}
                onChange={handleGenreChange}
            />

            <GenreCheckbox
                genre="Sports"
                checked={selectedGenres.includes("Action")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Supernatural"
                checked={selectedGenres.includes("Supernatural")}
                onChange={handleGenreChange}
            />
            <GenreCheckbox
                genre="Thriller"
                checked={selectedGenres.includes("Thriller")}
                onChange={handleGenreChange}
            />
        </div>
    );
}

export default GenreList;
