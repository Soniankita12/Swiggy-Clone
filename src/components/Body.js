import RestaurantCard from "./ReturantCard";
const Body = () => {
  return (
    <div>
      <div className="search-bar">Search</div>
      <div className="restro-card">
        <RestaurantCard
          resName="Meghana Foods"
          cusine="Biryani ,Pulao, Sweets"
        />
        <RestaurantCard resName="KFC" cusine="Burger, Fries, Coke" />
        <RestaurantCard
          resName="Cheesccakes"
          cusine="Cheesccakes ,Cookies, Sweets"
        />
        <RestaurantCard
          resName="Cake Factory"
          cusine="Cakes ,Cookies, Pastries"
        />
        <RestaurantCard
          resName="North ka chaska"
          cusine="Butter paneer ,Parathas, Sweets"
        />
        <RestaurantCard resName="South Thali" cusine="Dosa ,Idli, Uttapams" />
        <RestaurantCard
          resName="Pnjabi Tadka"
          cusine="Chole-Bhature ,Naan, Sweets"
        />
        <RestaurantCard
          resName="Cheesccakes & Co"
          cusine="Cheesccakes , Deserts ,Cookies, "
        />
        <RestaurantCard
          resName="Biryani Corner"
          cusine="Biryani ,Pulao, Nonveg"
        />
        <RestaurantCard resName="Fresh Bakery" cusine="Breads, Cookies" />
      </div>
    </div>
  );
};
export default Body;