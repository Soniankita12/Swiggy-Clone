const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-4 m-2">Contact Us</h1>
      <form>
        <input
          className="border border-inherit m-2 p-1"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-inherit m-2 p-1"
          type="text"
          placeholder="Message"
        />
        <button className="border border-inherit m-2 p-1 bg-green-500 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
