import React from "react"; 
import SearchBar from "../SearchBar/SearchBar"; 


const VideoPlayer = ({videoId}) => {
    
      
        return (
          <iframe
      width="350"
      height="200"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
        );
      };
      
   

     

 
export default VideoPlayer;