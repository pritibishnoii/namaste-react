import React, { useState, useEffect } from "react";
import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import resList from "../utils/API";
import Simmer from "./Simmer";
import {Link} from "react-router-dom";


const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // HOC 
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
  // console.log(RestaurantCardWithPromotedLabel)

  // Search handler
  const handleSearch = () => {
    const filtered = resData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResList(filtered);
  };


  useEffect(() => {
    fetchData()
  }, []);

  const fetchData =  () => {
    const data = resList;
    setResData(data);
    setFilteredResList(data);
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="flex bg-gray-100 py-2 rounded-md mb-4 w-full max-w-2xl mt-12">
          {/* Controlled input */}
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 px-4 outline-none rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-4 bg-orange-500 text-white rounded-md mx-2"
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <button
          className="px-6 py-4 bg-orange-500 text-white rounded-md my-8"
          onClick={() => {
            const topRated = resData.filter(
              (restaurant) => restaurant.avgRating >= 4.5
            );
            setFilteredResList(topRated);
            // console.log(topRated)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {/* Render Cards */}
    
    {
        filteredResList.length === 0 ? <Simmer /> :  <div className="flex flex-wrap justify-center gap-4">
    
    {
              filteredResList.map((restaurant) =>
            <Link to={`/restaurant/${restaurant.id}`}  key={restaurant.id} >
              {
                restaurant.promoted?<RestaurantCardWithPromotedLabel restaurant={restaurant} />
                :
                <RestaurantCard restaurant={restaurant} />
              }
            </Link>
        
    )}
      </div>
    }
    </>
  );
};

export default Body;
