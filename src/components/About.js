import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center ">About Me</h1>
        <div>
          <UserContext.Consumer>
            {(data) => <h1>{data.loggedInUser + " hiiiii"}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>this is ankita soni learning react</h2>
        <User name="Ankita Soni (function)" />
        <UserClass
          name="Ankita soni(class) "
          location="Bangalore(C)"
          designation="SDE1(class)"
        />
      </div>
    );
  }
}

export default About;
