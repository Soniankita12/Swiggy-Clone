import { Contact_Img } from "../../utils/constants";

const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-4 m-2">Contact Us</h1>
      <div className="flex flex-wrap">
        <div className="mx-10">
          <form>
            <div className="">
              <input
                className="w-52 border border-inherit m-2 p-2"
                type="text"
                placeholder="👤Name"
              />
            </div>
            <div>
              <input
                className=" w-52 border border-inherit m-2 p-2"
                type="text"
                placeholder="📝Message"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="📧Email"
                className=" w-52 border border-inherit m-2 p-2"
              />
            </div>
            <button className=" w-52 border border-inherit mx-2 my-4 p-2 bg-green-500 rounded-lg">
              Submit
            </button>
          </form>
        </div>

        <img
          className="w-6/12 h-full mx-14"
          src={Contact_Img}
        />
      </div>
    </div>
  );
};

export default ContactUs;
