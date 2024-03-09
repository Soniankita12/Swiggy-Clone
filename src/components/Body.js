import { useEffect, useState } from "react";
import { Res_List_Api } from "../../utils/constants";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLable } from "./ReturantCard";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // State variable(super powered react variable(by using hooks))
  //   const [listOfRestaurants, listOfRestaurants] = useState(resList);
  // same way array destucturing
  const arr = useState([]);
  const [listOfRestaurants, setlistOfRestaurants] = arr;
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
  console.log("data", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Res_List_Api);

    const json = await data.json();
    console.log(json);

    // Optinal Chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setfilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <div>
        <h1>you are offline</h1>
      </div>
    );
  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="">
      <div className="filter flex">
        <div className="m-2 p-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className=" border border-inherit"
          />
          <button
            className="cursor-pointer px-4 py-1 m-4 bg-green-500 rounded-lg"
            onClick={() => {
              // filter restaurant by name and update ui
              console.log("search is clicked");
              const filteredRestraunts = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setfilteredRestraunt(filteredRestraunts);
            }}>
            Search
          </button>
        </div>
        <div className="m-2 p-2 flex item-center">
          <button
            className=" cursor-pointer px-4 py-1 m-4 bg-green-500 rounded-lg"
            onClick={() => {
              setlistOfRestaurants((res) =>
                res.filter((resturant) => resturant.info.avgRating >= 4.3)
              );
            }}>
            Top Rated Restaurants
          </button>
          <button
            className=" cursor-pointer px-4 py-1 m-4 bg-green-500 rounded-lg"
            onClick={() => {
              setlistOfRestaurants((res) =>
                res.filter((resturant) => resturant.info.costForTwo > 200)
              );
            }}>
            Affordable meals
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mx-4">
        {filteredRestraunt.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
