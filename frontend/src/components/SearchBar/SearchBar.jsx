
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoPage from "../../pages/VideoPage/VideoPage";

const SearchBar = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function getVidoes() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type =video&maxResults=6`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    if (searchClicked) {
      getVidoes();
    }
  }, [searchTerm, searchClicked]);

  function handleClick(id) {
    setSelectedVideo(id);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchClicked(true)}>Search</button>
      <h2>Search Results</h2>
      <div id="video-grid">
        {videos.map((video) => (
          <ol>
            <li>
              <a
                key={video.id.videoId}
                onClick={() => handleClick(video.id.videoId)}
                target="_blank"
              >
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
              </a>
            </li>
          </ol>
        ))}
      </div>
      <VideoPage videos={videos} selectedVideo={selectedVideo} />
    </div>
  );
};

export default SearchBar;