import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=&key=AIzaSyA6HGDmTmHv29DCMk4vhNy4siE7wRJwH1I&part=snippet&type=video&maxResults=6", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideo(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        <label>
          Search: 
          <input
          type = 'text'
          name = 'search'
          value = ''
          onChange={handleInputChange}
          />
        </label>
    </div>
  );
};

export default HomePage;
