import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Fruit_Veg } from "../../utils/constants";

const Carousel = () => {
  const Img = Fruit_Veg;
  return (
    <div>
      <div className="flex flex-wrap justify-center m-2 p-2">
        <button className="m-2 ">
          <MdNavigateBefore size={45} />
        </button>
        <img
          src={Img}
          className="object-cover h-auto w-2/5 m-2 border border-inherit rounded-2xl "
          alt="food pic"
        />
        <button lassName="m-2 ">
          <MdNavigateNext size={45} />
        </button>
      </div>
      <h1 className="animate-bounce font-extrabold text-5xl text-green-500 text-center">
        comeing Soon !
      </h1>
    </div>
  );
};

export default Carousel;
