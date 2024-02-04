const RestaurantCard = (p) => {
  console.log(p);
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq88d1YIgUuvNoh8mON8iTYrd_LEjNmSWV995iA1tCmb4M7rMdoEQ0775zmsfF7NjbeDc&usqp=CAU"
        alt="res image"
      />
      <h3>{p.resName}</h3>
      <h4>{p.cusine}</h4>
      <h4>4.4 stars</h4>
      <h4>20 mins</h4>
    </div>
  );
};
export default RestaurantCard;