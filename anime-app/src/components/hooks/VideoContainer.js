import React from 'react';

function VideoContainer({videoId,videoSite}) {
 
  let embedUrl;

  if (videoSite === "youtube") {
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (videoSite === "dailymotion") {
    embedUrl = `https://www.dailymotion.com/embed/video/${videoId}`;
  }

  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoContainer;
