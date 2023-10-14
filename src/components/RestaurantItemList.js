import { CDN_URL } from "../utils/constants";

const RestaurantItemList = ({ items }) => {
  return items.map((item) => {
    return (
      <div
        key={item.card.info.id}
        className="flex flex-row py-2 border-gray-200 border-b-2 justify-between"
      >
        <div className="w-9/12">
          <span>{item.card.info.name}</span>
          <p>&#8377; {item.card.info.price / 100}</p>
          <p className="text-gray-500">{item.card.info.description}</p>
        </div>
        {item.card.info.imageId ? (
          <div>
            <button className="bg-white text-black px-8 shadow-md rounded-md absolute mt-12 ml-4 transition-colors ease-out hover:bg-gray-100 ">
              Add
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-20 w-auto rounded-md"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  });
};

export default RestaurantItemList;
