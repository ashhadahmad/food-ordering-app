import {
  CheckIcon,
  LinkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";

const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const restaurantData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9943577&lng=77.6603704&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await restaurantData.json();
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (listOfRestaurants.length == 0) {
    // Add Shimmer UI
    return <h1>Loading...</h1>;
  }

  if (!onlineStatus) {
    return <h1>Seems like you're offline</h1>;
  }

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between pt-5">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Restaurants
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <LinkIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Top Rated
            </button>
          </span>

          <span className="sm:ml-3">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                onChange={(e) => {
                  const searchTerm = e.target.value;
                  setSearchText(searchTerm);
                  const filteredRestaurants = listOfRestaurants.filter(
                    (restaurant) => {
                      return restaurant.info.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    }
                  );
                  setFilteredListOfRestaurants(filteredRestaurants);
                }}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-1.5 mr-4"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (restaurant) => {
                      return restaurant.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                    }
                  );
                  console.log(searchText);
                  setFilteredListOfRestaurants(filteredRestaurants);
                }}
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CheckIcon
                className="-ml-0.5 mr-1.5 h-5 w-5"
                aria-hidden="true"
              />
              Publish
            </button>
          </span>
        </div>
      </div>
      <main>
        <div className="py-6 grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-4 grid-cols-2 gap-4">
          {filteredListOfRestaurants.map((restaurant) => (
            <Card key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
