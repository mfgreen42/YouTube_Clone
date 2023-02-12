import React from "react";
import { Link } from 'react-router-dom'
import SearchVideos from "../../components/SearchVideos/SearchVideos"
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = () => {
    return ( 
        <div>
            <Link to='/'>Home Page</Link>
            <SearchBar />
        </div>
     );
}
 
export default SearchPage;

