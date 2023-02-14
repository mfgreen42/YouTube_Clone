import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPlayer = () => {
  let { videoId, relatedVideoId } = useParams();

  return (
    <div>
      <div>
        <iframe
          width="350"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}?origin=*`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <iframe
          width="350"
          height="200"
          src={`https://www.youtube.com/embed/${relatedVideoId}?origin=*`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
