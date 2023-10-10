import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Card = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = restaurant?.info;

  return (
    <Link to={"/restaurant/" + restaurant.info.id} className="card">
      <div className="card-img">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-data">
          <p>{cuisines.join(",")}</p>
          <p>{area}</p>
          <p>{lastMileTravelString}</p>
          <p>{costForTwoString}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
