import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const SearchBar = () => {

    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(() => {
        async function getVidoes() {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users?maxResults=6');
            setVideos(response.data);
          } catch (error) {
            console.error(error);
          }
    }

      getVidoes();
},[])

const handleSearch = () => {
    const filtered = videos.filter(video =>
      video.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setSearchTerm('')}>Reset Search</button>
      <ul id="video-list">
        {filteredVideos.map(videos => (
          <li key={videos.id}>{videos.name} ({videos.email})</li>
        ))}
      </ul>
    </div>
  );
}



     

 
export default SearchBar;


