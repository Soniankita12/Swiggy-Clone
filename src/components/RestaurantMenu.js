import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Menu_List_Api}  from "../../utils/constants";
import ShimmerUi from "./ShimmerUi";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_List_Api + resId);
    const json = await data.json();;
    setresInfo(json.data);
  };

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards);
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
             ( (item.card.info.defaultPrice / 100 )||
               ( item.card.info.price / 100))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
