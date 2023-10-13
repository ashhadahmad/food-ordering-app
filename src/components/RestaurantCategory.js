import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

export default RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="my-4 px-4 bg-slate-50 shadow-sm">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="self-center font-semibold text-lg py-4">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="self-center">
          <ChevronDownIcon className="w-5" />
        </span>
      </div>
      {showItem ? <RestaurantItemList items={data.itemCards} /> : <div></div>}
    </div>
  );
};
