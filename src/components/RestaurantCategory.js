import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItem}) => {
 
  const handleClick =()=>{
console.log("buttton clicked");

setshowItem(!showItem);
  }
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>
       {showItem && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian data */}
    </div>
  );
};

export default RestaurantCategory;
