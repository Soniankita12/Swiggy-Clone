const RestaurantCategory = ({data}) =>{
    console.log("datain",data);
    return (
      <div>
        {/* header */}
        <div className="w-full bg-gray-50 shadow-lg p-4">
          <span>⏬</span>
          <span>{data?.title}</span>
        </div>

        {/* Accordian data */}
      </div>
    );
}

export default RestaurantCategory;