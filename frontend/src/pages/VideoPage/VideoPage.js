import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useParams } from 'react-router-dom';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import { useState } from "react";

const VideoPage = () => {
  let { videoId } = useParams();

  const [postComments, setPostComments] =useState([{name: 'mfgreen', comment: 'This video is great!'}])

  function addNewComment(postComment,) {
    let tempPost = [postComment, ...postComments];
    setPostComments(tempPost);
  }
      
  
  return (
    <div>
    <VideoPlayer videoId = {videoId} />
    <CommentForm videoId = {videoId} addNewComment = {addNewComment}/>
    <CommentList postComment={postComments}/>
    <RelatedVideos videoId = {videoId} />
    </div>
    )
  }

  export default VideoPage

