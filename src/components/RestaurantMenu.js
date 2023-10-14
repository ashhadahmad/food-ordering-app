import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const restaurantInfo = useRestaurantInfo(resId);

  if (restaurantInfo === null) {
    // Add Shimmer UI
    return <h1>Loading...</h1>;
  }

  const { name, cuisines } = restaurantInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) =>
        data?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between pt-5">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {name}
          </h2>
        </div>
      </div>
      <main>
        <div className="py-6">
          {cuisines.join(", ")}
          {categories.map((category, i) => (
            <RestaurantCategory
              key={i}
              data={category?.card?.card}
              // Controlled component
              showItem={i == showIndex ? true : false}
              setShowIndex={() =>
                showIndex == i ? setShowIndex(null) : setShowIndex(i)
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantMenu;
