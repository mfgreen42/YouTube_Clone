import React from "react";
import useAuth from "../../hooks/useAuth";
import VideoPage from "../../components/VideoPage/VideoPage";
import { Link } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  const [user, token] = useAuth();
  console.log('Home Page',token)
  console.log('Home Page',user)


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/search">Search Videos</Link>
      <VideoPage/>
      <SearchBar token = {token} user = {user} />
    </div>
  );
};

export default HomePage;