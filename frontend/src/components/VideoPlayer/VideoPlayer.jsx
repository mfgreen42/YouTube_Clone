import React from "react";

const VideoPlayer = (props) => {

  return (
    <div>
      <div>
        <iframe
          width="350"
          height="200"
          src={`https://www.youtube.com/embed/${props.videoId}?origin=*`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
    </div>
  );
};

export default VideoPlayer;
