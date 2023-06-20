import React from "react";
import MediaItem from "./MediaItem";
import classes from "./MediaList.module.css";

function MediaList(props) {
    function pageClassSelector() {
        const { page } = props;
   

        if (page === "home") {
            return classes.homeList;
        } else if (page === 'animeBrowse'){
            return classes.animeBrowse;
        }
    }
 
   

    return (
        <ul className={pageClassSelector()}>
            {props.list.map((item) => (
                <MediaItem
                    key={item.id}
                    id={item.id}
                    image={item.coverImage.large}
                    titleRomaji={item.title.romaji}
                    episodes={item.episodes}
                    genres={item.genres}
                    onMediaClick={props.onMediaClick}
                />
            ))}
        </ul>
    );
}

export default MediaList;
