const RestaurantCategory = ({ data }) => {
  console.log("datain", data);
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold">
          {data?.title}({data.itemCards.length})
        </span>
        <span>⏬</span>
      </div>

      {/* Accordian data */}
    </div>
  );
};

export default RestaurantCategory;
