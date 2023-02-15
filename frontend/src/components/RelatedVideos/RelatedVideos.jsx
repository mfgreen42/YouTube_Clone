import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

const RelatedVideos = () => {
  const [findRelatedVideos, setFindRelatedVideos] = useState([]);
  const [foundRelatedVideos, setFoundRelatedVideos] =useState([])

  let { videoId } = useParams();

  useEffect(() => {
    async function getRelatedVidoes() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}&maxResults=5&part=snippet`
        );
        console.log(response.data);

        setFindRelatedVideos(response.data.items);
        debugger;
      } catch (error) {
        console.error(error);
      }
    }
    getRelatedVidoes();

  }, []);



    // function displayRelatedVideos(findRelatedVideos) {
    //     let foundRelatedVideos = findRelatedVideos.map((video) => (
            
    //     ));
    // }

  return (
    <div className="video-grid">
      
      {findRelatedVideos.map((video) => (
          <ol>
            <li>
              <Link to={`/videopage/${video.id.videoId}`} key={video.id.videoId}>
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                <p>{video.id.videoId}</p>
              </Link>
            </li>
          </ol>
        ))}
    </div>
  );
};

export default RelatedVideos;
