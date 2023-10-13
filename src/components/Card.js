import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Card = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating,
    aggregatedDiscountInfoV3,
  } = restaurant?.info;

  return (
    <Link to={"/restaurant/" + restaurant.info.id}>
      <article className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer rounded-lg">
        <div className="overflow-hidden max-h-48">
          <img
            className="w-full h-auto rounded-t-lg"
            src={CDN_URL + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="p-4 my-auto">
          <h1 className="text-lg font-bold text-gray-700">{name}</h1>
          <div className="text-md font-light leading-relaxed text-gray-400">
            <p className="overflow-hidden">{cuisines.join(",")}</p>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
            <p>{avgRating}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

// Higher order component
export const withDiscountLabel = (Card) => {
  return (props) => {
    const { header, subHeader } =
      props.restaurant.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label>
          <div className="absolute z-10 bg-gray-900 text-white p-1 rounded-lg m-1 opacity-90">
            {header + " " + subHeader}
          </div>
          <Card {...props} />
        </label>
      </div>
    );
  };
};

export default Card;
