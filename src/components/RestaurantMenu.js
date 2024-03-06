import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  );

  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="text-center text">
      <h1 className="text-3xl font-bold my-4">{name}</h1>
      <h3 className="text-lg font-light my-4">{cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.id}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
      {/* Accordian items*/}
    </div>
  );
};

export default RestaurantMenu;
