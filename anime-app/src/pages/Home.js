import classes from "./Home.module.css";
import { useState } from "react";
import DetailOverlay from "../components/ui/DetailOverlay.js";

//Home Page
import MediaList from "../components/Media/MediaList";
import data from "./data.json";

const DUMMY_DATA = data;
function Home() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [selectedMediaId, setSelectedMediaId] = useState(null);
    const handleMediaClick = (mediaId) => {
        setSelectedMediaId(mediaId);
        setIsOverlayVisible(true);
    };
    const handleCloseOverlay = () => {
        setIsOverlayVisible(false);
    };
    return (
        <section className={classes.content}>
            <div className={classes.container}>
                <h2>Top Trending Animes</h2>
                <MediaList page="home" list={DUMMY_DATA.data.Page.media} onMediaClick= {handleMediaClick} />

                <h2>Top Trending Animes</h2>
                <MediaList page="home" list={DUMMY_DATA.data.Page.media} onMediaClick= {handleMediaClick}/>
            </div>
            {isOverlayVisible && (
                <DetailOverlay
                    mediaId={selectedMediaId}
                    onClose={handleCloseOverlay}
                />
            )}
        </section>
    );
}

export default Home;
