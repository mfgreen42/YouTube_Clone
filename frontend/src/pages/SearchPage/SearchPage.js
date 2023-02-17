import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../../src/App.css";

const SearchPage = () => {
  return (
    <div>
      <div className="link-to-home">
        <Link to="/">Home Page</Link>
      </div>
      <div className="centerd-div">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchPage;
