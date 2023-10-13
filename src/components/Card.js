import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Card = ({ restaurant }) => {
  console.log(restaurant?.info);
  const { cloudinaryImageId, name, cuisines, areaName, costForTwo, avgRating } =
    restaurant?.info;

  return (
    <Link to={"/restaurant/" + restaurant.info.id}>
      <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
        <div class="overflow-hidden max-h-48">
          <img class="w-full h-auto" src={CDN_URL + cloudinaryImageId} alt="" />
        </div>
        <div class="p-4 my-auto">
          <h1 class="text-lg font-bold text-gray-700">{name}</h1>
          <div class="text-md font-light leading-relaxed text-gray-400">
            <p className="overflow-auto">{cuisines.join(",")}</p>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
            <p>{avgRating}</p>
          </div>
        </div>
      </article>
    </Link>

    // <Link to={"/restaurant/" + restaurant.info.id} className="card">
    //   <div className="card-img">
    //     <img src={CDN_URL + cloudinaryImageId} />
    //   </div>
    //   <div className="card-body">
    //     <h2 className="card-title">{name}</h2>
    //     <div className="card-data">
    //       <p>{cuisines.join(",")}</p>
    //       <p>{area}</p>
    //       <p>{lastMileTravelString}</p>
    //       <p>{}</p>
    //       <p>{avgRating}</p>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default Card;
