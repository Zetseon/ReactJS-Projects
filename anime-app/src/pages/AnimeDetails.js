import React, { useState, useEffect } from "react";
import classes from "./AnimeDetails.module.css";
import { fetchMediaDetails } from "../components/hooks/FetchCalls";
import DOMPurify from "dompurify";
import CharacterItem from "../components/hooks/CharacterItem";
import VideoContainer from "../components/hooks/VideoContainer";
import { useParams } from "react-router-dom";

function AnimeDetails() {
    const { mediaId } = useParams();
    const [mediaDetails, setMediaDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await fetchMediaDetails(mediaId);
                setMediaDetails(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [mediaId]);

    useEffect(() => {
        // Prevent scrolling in the background when the overlay is displayed
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scrolling when the overlay is closed
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!mediaDetails) {
        return null;
    }

    const {
        coverImage,
        title,
        description,
        favourites,
        averageScore,
        rankings,
        type,
        startDate,
        endDate,
        genres,
        episodes,
        status,
        synonyms,
        seasonYear,
        season,
        characters,
        trailer,
    } = mediaDetails;
    const trailerId = trailer?.id;
    const trailerSite = trailer?.site;
    const characterInfo = characters.edges;
    const sanitizedDescription = DOMPurify.sanitize(description, {
        USE_PROFILES: { html: true },
    });

    function handleTrailer(trailerId, trailerSiteZ) {
        if (trailerSite && trailerId) {
            return (
                <VideoContainer videoId={trailerId} videoSite={trailerSite} />
            );
        }
        return null;
    }

    return (
        <div className={classes.overlayContainer}>
            <div className={classes.overlay}>
                <div className={classes.content}>
                    <div className={classes.data}>
                        {/* SIDE BAR DATA STARTS HERE */}
                        <div className={classes.sideBar}>
                            <div className={classes.image}>
                                <img src={coverImage.large} alt="" />
                            </div>
                            <div className={classes.rating}>
                                <p>
                                    <span>Average Score: </span>
                                    {averageScore}
                                </p>
                                <p>
                                    <span>
                                        {rankings[0].context
                                            .charAt(0)
                                            .toUpperCase() +
                                            rankings[0].context.slice(1)}
                                        : #
                                    </span>
                                    {rankings[0].rank}
                                </p>
                                <p>
                                    <span>
                                        {rankings[1].context
                                            .charAt(0)
                                            .toUpperCase() +
                                            rankings[1].context.slice(1)}
                                        : #
                                    </span>
                                    {rankings[1].rank}
                                </p>
                                <p>
                                    <span>Favourites: </span>
                                    {favourites}
                                </p>
                            </div>
                            <div className={classes.sideBarData}>
                                <p>
                                    <span>Episodes:</span> <br></br>
                                    {episodes}
                                </p>
                                <p>
                                    <span>Genres:</span> <br></br>
                                    {genres.join(", ")}
                                </p>
                                <p>
                                    <span>Air Date:</span>
                                    <br></br> {startDate.month}/{startDate.day}/
                                    {startDate.year} - {endDate.month}/
                                    {endDate.day}/{endDate.year}
                                </p>
                                <p>
                                    <span>Status:</span> <br></br>
                                    {status}
                                </p>

                                <p>
                                    <span>Season released:</span> <br></br>
                                    {season} - {seasonYear}
                                </p>
                                <p>
                                    <span>Synonyms:</span>
                                    <br />
                                    {synonyms.map((synonym, index) => (
                                        <React.Fragment key={index}>
                                            {synonym}
                                            {index !== synonyms.length - 1 && (
                                                <br />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                        {/* BODY DATA STARTS HERE */}
                        <div className={classes.bodyData}>
                            <div className={classes.bodyHeader}>
                                <div className={classes.titles}>
                                    <p>
                                        <span>Romaji Title:</span>{" "}
                                        {title.romaji}
                                    </p>
                                    <p>
                                        <span>English Title:</span>{" "}
                                        {title.english}
                                    </p>
                                </div>
                                <div className={classes.description}>
                                    <p>
                                        <span>Synopsis:</span>
                                    </p>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizedDescription,
                                        }}
                                    ></p>
                                </div>
                            </div>
                            <div className={classes.body}>
                                <div className={classes.voiceActors}>
                                    <h4>Main Characters and Voice Actors:</h4>
                                    <ul>
                                        {characterInfo.map((character) => (
                                            <CharacterItem props={character} />
                                        ))}
                                    </ul>
                                    {handleTrailer(trailerId, trailerSite)}
                                </div>
                                <div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.body}>
                <div className={classes.details}>
                    <p>Type: {type}</p>
                    <p>
                        Start Date: {startDate.year}/{startDate.month}/
                        {startDate.day}
                    </p>
                    <p>
                        End Date: {endDate.year}/{endDate.month}/
                        {endDate.day}
                    </p>
                    <p>Episodes: {episodes}</p>
                    <p>Season Year: {seasonYear}</p>
                    <p>Season: {season}</p>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    );
}

export default AnimeDetails;
