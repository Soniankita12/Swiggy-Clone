import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
   console.log(
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   );
  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" ,")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" "}
            {"₹" +
              (item.card.info.defaultPrice / 100 || item.card.info.price / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
