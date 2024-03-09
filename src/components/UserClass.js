import React from "react";
import PopupModal from "./PopupModal";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "dummy name", location: "Default", showModel: false },
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShowModal() {
    this.setState((prevState) => ({
      userInfo: { ...prevState.userInfo, showModel: true },
    }));
  }

  handleCloseModal() {
    this.setState((prevState) => ({
      userInfo: { ...prevState.userInfo, showModel: false },
    }));
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/soniankita12");
    const json = await data.json();
    this.setState({ userInfo: { ...this.state.userInfo, ...json } });
  }
  componentWillUnmount() {}

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    const { showModel } = this.state.userInfo;
    return (
      <div className="">
        <div className=" border border-inherit rounded-3xl mx-96 my-4 p-10  ">
          <div className="flex flex-wrap justify-between ">
            <h1 className="text-3xl font-bold flex items-center">
              Software Developer
            </h1>

            <img
              src={avatar_url}
              className=" flex items-center w-40 h-40 border border-ingerit rounded-full "
            />
          </div>
          <p>
            I'm Ankita Soni, a Software Developer with a passion for front-end
            development, bringing life to innovative web solutions. With a
            B.Tech in Mechanical Engineering from NIT Jalandhar, I excel in
            React.js, JavaScript, and Agile methodologies. At Physics Wallah, I
            led the PEN-PENCIL project, enhancing user experience significantly.
            My portfolio includes projects like a dynamic weather website and a
            Zomato clone, showcasing my knack for increasing engagement. A
            3-star coder on LeetCode, I'm committed to excellence in
            problem-solving and design.
          </p>
        </div>
        <div className="flex flex-wrap justify-center my-8">
          <button
            onClick={this.handleShowModal}
            className="border border-inherit w-48 m-2 p-2 bg-green-500 rounded-lg">
            Send Email
          </button>
          <button
            onClick={() =>
              alert(
                " \" I truly value your perspective. If you have a moment, could you kindly share your thoughts? Your feedback is immensely appreciated.\""
              )
            }
            className="border border-inherit w-48 m-2 p-2 bg-green-500 rounded-lg">
            Send Feedback
          </button>
          {showModel && <PopupModal onClose={this.handleCloseModal} />}
        </div>
      </div>
    );
  }
}

export default UserClass;
/* 
mounting life cycle
 constructor
 render withdummy data
  <htmldummy/>
 component did mount 
  <Apicall>
   this.setState
update--
 renderm (with apidata)
 <html(newapi data)>
 component did update
*/
