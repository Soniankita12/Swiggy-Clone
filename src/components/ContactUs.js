import { useState } from "react";
import { Contact_Img } from "../../utils/constants";
import PopupModal from "./PopupModal";

const ContactUs = () => {
  const [showModel, setshowModel] = useState(false);
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
                required
              />
            </div>
            <div>
              <input
                className=" w-52 border border-inherit m-2 p-2"
                type="text"
                placeholder="📝Message"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="📧Email"
                className=" w-52 border border-inherit m-2 p-2"
                required
              />
            </div>
            <div>
              <button
                className=" w-52 border border-inherit mx-2 my-4 p-2 bg-green-500 rounded-lg"
                onClick={(event) => {
                  event.preventDefault();
                  alert("form submitted");
                }}>
                Submit
              </button>
            </div>
          </form>
          <button
            onClick={() => {
              setshowModel(true);
              console.log("Popup closed");
            }}
            className=" w-52 border border-inherit mx-2 my-6 p-2 bg-green-500 rounded-lg">
            Get Email Address
          </button>
          {showModel && (
            <PopupModal
              onClose={() => {
                setshowModel(false);
                console.log("closedd");
              }}
            />
          )}
        </div>

        <img className="w-6/12 h-full mx-14" src={Contact_Img} />
      </div>
    </div>
  );
};

export default ContactUs;
