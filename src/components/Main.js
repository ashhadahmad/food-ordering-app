import { CookingPot, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurants();
  });

  const fetchRestaurants = async () => {
    const restaurantData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6802266&lng=77.3462612&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await restaurantData.json();
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (listOfRestaurants.length == 0) {
    // Add Shimmer UI
    return <h1>Loading...</h1>;
  }

  return (
    <main className="main">
      <div className="responsive-wrapper">
        <div className="main-header">
          <h1>Restaurants</h1>
          <div className="top-rated">
            <a
              className="header-button"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRatingString >= 4.0
                );
                console.log(filteredRestaurants);
                setListOfRestaurants(filteredRestaurants);
              }}
            >
              <CookingPot weight="bold" />
              <span className="header-button-tag">Top Rated</span>
            </a>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <MagnifyingGlass weight="bold" />
            </button>
          </div>
        </div>
        <div className="card-grid">
          {listOfRestaurants.map((restaurant) => (
            <Card key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
