import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantInfo(json);
  };

  if (restaurantInfo === null) {
    // Add Shimmer UI
    return <h1>Loading...</h1>;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info;

  const items =
    restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <img src={CDN_URL + cloudinaryImageId} width={500}></img>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <ul>
        {items?.map((item) => {
          return (
            <li key={item.card.info.id}>
              <p>
                {item.card.info.name} - Rs.
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
