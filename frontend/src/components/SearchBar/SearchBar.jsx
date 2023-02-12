import React from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth"






const SearchBar = () => {

    const [user, token] = useAuth()
    const [videos, setVideos] = useState([])



    return ( 
        <div>
        <form>
        <label>
            Search:
            <input
            type= 'text' 
            name = 'search'
            />
        </label>
        <button >Search Videos</button>
        </form>
        <ol>
            <li> </li>
            <li>Now</li>
            <li>This</li>
            <li>Isn't</li>
            <li>Working</li>
        </ol>
    </div>

     );
}
 
export default SearchBar;


