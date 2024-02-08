import RestaurantCard from "./ReturantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
const Body = () => {
  // State variable(super powered react variable(by using hooks))
  //   const [listOfRestaurants, listOfRestaurants] = useState(resList);
  // same way array destucturing
  const arr = useState([]);
  const [listOfRestaurants, setlistOfRestaurants] = arr;
  const [filteredRestraunt,setfilteredRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
            console.log(listOfRestaurants);
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
        {filteredRestraunt.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
