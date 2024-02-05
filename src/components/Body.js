import resList from "../../utils/mockdata";
import RestaurantCard from "./ReturantCard";
import { useState } from "react";
import resList from "../../utils/mockdata";
const Body = () => {
  // State variable(super powered react variable(by using hooks))
//   const [listOfRestaurants, listOfRestaurants] = useState(resList);
  // same way array destucturing
  const arr = useState(resList);
  const[listOfRestaurants,setlistOfRestaurants] =arr;


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.data.avgRating >= 4)
            );
            console.log(listOfRestaurants);
          }}>
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurants((res) =>
              res.filter((resturant) => resturant.data.costForTwo >4 )
            );
            console.log(listOfRestaurants);
          }}>
          Affordable meals
        </button>
      </div>

      <div className="restro-card">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
