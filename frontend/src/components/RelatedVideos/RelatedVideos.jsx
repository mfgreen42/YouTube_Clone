import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import "../../App.css"

const RelatedVideos = () => {
  const [findRelatedVideos, setFindRelatedVideos] = useState([]);

  let { videoId } = useParams();

  useEffect(() => {
    async function getRelatedVidoes() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}&maxResults=5&part=snippet`
        );
        console.log(response.data);

        setFindRelatedVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }
    getRelatedVidoes();

  }, []);

  return (
    <div className="video-grid">
      <div className="video-player">
        {/* Code for the video player */}
      </div>
      <div className="comment-form">
        {/* Code for the comment form */}
      </div>
      <div className="centered-div">
        <h2 className="h2-results">Related Videos</h2>
        <div className="video-grid">
          {findRelatedVideos.map((video) => (
            <ul key={video.id.videoId}>
              <li className="related-video-link">
                <Link to={`/videopage/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                  <p>{video.snippet.title}</p>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
