import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  );
  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="text-center text">
      <h1 className="text-3xl font-bold my-4">{name}</h1>
      <h3 className="text-lg font-light my-4">{cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      {categories.map( (category) => <RestaurantCategory data= {category?.card?.card}/>)}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" "}
            {"₹" +
              (item.card.info.defaultPrice / 100 || item.card.info.price / 100)}
          </li>
        ))}
      </ul>
      {/* Accordian items*/ }
    </div>
  );
};
export default RestaurantMenu;
