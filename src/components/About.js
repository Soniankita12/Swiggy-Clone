import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold  ">About Me</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
