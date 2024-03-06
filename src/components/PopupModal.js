import { IoMdClose } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
const PopupModal = ({ onClose }) => {
  const email = "Ankitasoni2211104@gmail.com";
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col gap-5 ">
        <button onClick={onClose} className="place-self-end">
          <IoMdClose size={35} />
        </button>

        <div className="bg-pink-200  p-6 border border-indigo-200 rounded-xl ">
          <h1 className="font-extrabold text-3xl text-center p-4 m-2">
            Email Address
          </h1>
          <div className="flex justify-between">
            <p
              value={email}
              className="border border-gray-400 rounded-lg m-2 p-2">
              {email}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(email);
              }}
              className="border border-gray-400 rounded-lg m-2 p-2 flex items-center justify-center gap-2 focus:outline-none focus:ring focus:ring-pink-300 ...">
              Copy
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
