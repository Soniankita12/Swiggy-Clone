import RestaurantCard from "./ReturantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
const Body = () => {
  // State variable(super powered react variable(by using hooks))
  //   const [listOfRestaurants, listOfRestaurants] = useState(resList);
  // same way array destucturing
  const arr = useState([]);
  const [listOfRestaurants, setlistOfRestaurants] = arr;
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
  };

  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
