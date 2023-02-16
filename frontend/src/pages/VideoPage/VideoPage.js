import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useParams } from 'react-router-dom';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";


const VideoPage = (props) => {
  let { videoId } = useParams();

      
  
  return (
    <div>
    <VideoPlayer videoId = {videoId} />
    <CommentForm videoId = {videoId} />
    <CommentList comment= {props.comment} name = {props.name}/>
    <RelatedVideos videoId = {videoId} />
    </div>
    )
  }

  export default VideoPage

