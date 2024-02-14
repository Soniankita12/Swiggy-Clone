import { useEffect, useState } from "react";
import { Res_List_Api } from "../../utils/constants";
import { Link } from "react-router-dom";
import RestaurantCard from "./ReturantCard";
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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     Res_List_Api
    );

    const json = await data.json();

    // Optinal Chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };
  const OnlineStatus =useOnlineStatus();
  if(OnlineStatus === false)
  return (<div><h1>you are offline</h1></div>);
  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.info.avgRating >= 4.3)
            );
          }}>
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.info.costForTwo > 200)
            );
          }}>
          Affordable meals
        </button>
      </div>

      <div className="restro-card">
        {filteredRestraunt.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
