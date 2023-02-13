import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";



const VideoPage = ({ videos, selectedVideo }) => {
        const selected = videos.find(video => video.id.videoId === selectedVideo);
      
        return (
          <div>
            {selected 
                    
            ?   
            (
              <div>
                <h2>{selected.snippet.title}</h2>
                <iframe
                  src={`https://www.youtube.com/embed/${selected.id.videoId}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <h2></h2>
            )}
          </div>
        );
      };
      
   
      
      

  export default VideoPage

