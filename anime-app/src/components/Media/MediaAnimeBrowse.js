import { url } from "../hooks/FetchCalls.js";
import { MEDIA_QUERY } from "../hooks/Queries.js";
import MediaList from "./MediaList";
import { useState, useEffect } from "react";
import classes from './MediaAnimeBrowse.module.css'
function MediaAnimeBrowse({ selectedGenres, sortBy, onMediaClick, searchQuery}) {
    const [isLoading, setisLoading] = useState(true);
    const [pageState, setPageState] = useState(1);
    const [loadedAnimeInfo, setLoadedAnimeInfo] = useState({
        media: [],
        pageInfo: {
            currentPage: 0,
            lastPage: 0,
            hasNextPage: false,
        },
    });
    const fetchAnimeInfo = (genres, sortBy, page, search) => {
        const queryVariables = {
            perPage: 10,
            genres: genres.length === 0 ? null : genres,
            sort: sortBy,
            type: "ANIME",
            page: page,
            search:search || null
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: MEDIA_QUERY,
                variables: queryVariables,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setisLoading(false);
                const media = data?.data?.Page?.media || []; // Ensure media is an array even if it's not present in the response
                const pageInfo = data?.data?.Page?.pageInfo || {
                    currentPage: 0,
                    lastPage: 0,
                }; // Ensure pageInfo has default values
                if (pageState > 1) {
                    setLoadedAnimeInfo((prevLoadedAnimeInfo) => ({
                        media: [...prevLoadedAnimeInfo.media, ...media],
                        pageInfo: pageInfo,
                    }));
                } else {
                    setLoadedAnimeInfo({ media, pageInfo });
                }
            })
            .catch((error) => {
                console.log(error);
                setisLoading(false);
                setLoadedAnimeInfo({
                    media: [],
                    pageInfo: { currentPage: 0, lastPage: 0 },
                }); // Set empty object in case of error
            });
    };

    useEffect(() => {
        fetchAnimeInfo(selectedGenres, sortBy, pageState, searchQuery);
    }, [selectedGenres, sortBy, pageState, searchQuery]);
    

    const loadMorePages = () => {
        if(loadedAnimeInfo.pageInfo.hasNextPage){
            setPageState((prevPageState) => prevPageState + 1);
        } else {
            <h2>No result</h2>
        }
    };

    useEffect(() => {
        setPageState(1);
        setLoadedAnimeInfo({
            media: [],
            pageInfo: {
                currentPage: 0,
                lastPage: 0,
            },
        });
    }, [selectedGenres, sortBy]);

    if (isLoading) {
        return <h1>is loading</h1>;
    }

    return (
        <div className={classes.content}>
            <MediaList
                list={loadedAnimeInfo.media}
                page="animeBrowse"
                onMediaClick={onMediaClick}
            />
            <p>
                {loadedAnimeInfo.pageInfo.currentPage} of{" "}
                {loadedAnimeInfo.pageInfo.lastPage}
            </p>
            <button onClick={loadMorePages}>Load more</button>
        </div>
    );
}
//Pass a prop from Anime with form, it will pass variables to the query. in Anime pass
export default MediaAnimeBrowse;
