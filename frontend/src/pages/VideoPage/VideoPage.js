import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useParams } from 'react-router-dom';


const VideoPage = () => {
  let { videoId } = useParams();

      
  
  return (
    <div>
    <VideoPlayer videoId = {videoId} />
    <RelatedVideos videoId = {videoId} />
    </div>
    )
  }

  export default VideoPage

