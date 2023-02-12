import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const VideoPage = () => {
    const [user, token] = useAuth()
    const [videos, setVideos] = useState([])
    console.log('user',user.name)
    console.log(token)


    return ( 
        <div>
                <li>
                    {videos.data}
                </li>
                <li>Why</li>
                <li>Isn't</li>
                <li>This</li>
                <li>Working?!</li>
        </div>
     );
}
 
export default VideoPage;