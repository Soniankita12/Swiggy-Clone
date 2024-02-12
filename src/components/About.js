import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props){
    super(props);
    console.log(" parent constructor ");
  }
  componentDidMount(){
    console.log("parent did mount");
  }
  render(){
    console.log(" parent render");
  return (
    <div>
      <h1>About</h1>
      <h2>this is ankita soni learning react</h2>
      <User name="Ankita Soni (function)" />
      <UserClass name="Ankita soni(class) " location="Bangalore(C)" designation ="SDE1(class)"/>
    </div>
  );
  }
};
export default About;
