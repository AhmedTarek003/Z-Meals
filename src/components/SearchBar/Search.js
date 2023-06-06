import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../rtk/slices/searchSlice";
import { Link } from "react-router-dom";
function Search() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const searchfounnd = (e) => {
    const input = document.querySelector(".search-input");
    input.value = "";
  };

  useEffect(() => {
    dispatch(fetchSearch(search));
  }, [dispatch, search]);
  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Recipes Here..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search === "" ? (
          <button className="search-btn">Search</button>
        ) : (
          <Link to={`search/${search}`}>
            <button onClick={searchfounnd} className="search-btn">
              Search
            </button>
          </Link>
        )}
      </div>
      <div className="caption">What Are Your Favorite Food ? </div>
    </div>
  );
}

export default Search;
