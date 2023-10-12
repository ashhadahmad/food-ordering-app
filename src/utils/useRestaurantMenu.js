import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantInfo = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantInfo(json);
  };

  return restaurantInfo;
};

export default useRestaurantInfo;
