import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import "../../App.css"

const SearchBar = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    async function getVidoes() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type =video&maxResults=6`
        );
        console.log(response);
        setVideos(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    if (searchClicked) {
      getVidoes();
    }
  }, [searchTerm, searchClicked]);

  function handleClick(videoid) {
    setSelectedVideo(videoid);
    console.log('selected video',selectedVideo)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={() => setSearchClicked(true)}>Search Videos</button>
      <h2 className="h2-results">Search Results</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <ul>
            <li className="card">
              <Link
                to={`/videopage/${video.id.videoId}`} key={video.id.videoId}
                
              
                onClick={() => handleClick(video.id.videoId)}>
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
                {/* <p>{video.snippet.description}</p> */}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
