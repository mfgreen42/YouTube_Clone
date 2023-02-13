import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  const [user, token] = useAuth();
  console.log('Home Page',token)
  console.log('Home Page',user)


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/search">Click here to search for your favorite videos</Link>
    </div>
  );
};

export default HomePage;