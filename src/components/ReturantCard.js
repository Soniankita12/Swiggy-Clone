const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250] cursor-pointer rounded-lg bg-gray-100 h-max hover:bg-gray-300 ">
      <img
        className="w-[250] h-[250] rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res image"
      />
      <h3 className="font-bold py-1 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// higher order component
// it takes input as =>resturant card =>Promoted restaurantcard
export const withPromotedLable =(RestaurantCard) =>{
  return (props)=>{
    return(<div>
      <label className="absolute bg-green-500  p-2 rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
      </div>);
  }
}
export default RestaurantCard;
