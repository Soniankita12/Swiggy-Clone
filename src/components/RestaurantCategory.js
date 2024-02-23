import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setshowIndex }) => {

  const handleClick = () => {
    setshowIndex();
  };
  
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
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
