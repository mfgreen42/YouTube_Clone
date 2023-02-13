import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const SearchBar = () => {

    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);



    useEffect(() => {
        async function getVidoes() {
          try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyA6HGDmTmHv29DCMk4vhNy4siE7wRJwH1I&part=snippet&type =video&maxResults=6`);
            setVideos(response.data.items);
            console.log('search has ran')
          } catch (error) {
            console.error(error);
          }
    }

      if (searchClicked){ 
      getVidoes();
      }
},[searchTerm, searchClicked])

// const handleSearch = () => {
//     const filtered = videos.filter(video =>
//       video.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setVideos(filtered);
//   };

  return (
    <div>
      <h2>Search Results</h2>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={() => setSearchClicked(true)}>Search</button>
      <div id="video-grid">
        {videos.map(video => (
          <a key={video.id.videoId} href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.title}</p>
          </a>
        ))}
      </div>
    </div>
    );
}



     

 
export default SearchBar;


