import { CookingPot, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { restaurant_data } from "../utils/mockData";
import Card from "./Card";

const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurant_data);

  return (
    <main className="main">
      <div className="responsive-wrapper">
        <div className="main-header">
          <h1>Restaurants</h1>
          {console.log(listOfRestaurants)}
          <div className="top-rated">
            <a
              className="header-button"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter(
                  (restaurant) => restaurant.data.avgRating >= 4.0
                );
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
            <Card key={restaurant.data.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
