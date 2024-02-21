import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "dummy name", location: "Default" },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/soniankita12");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  componentWillUnmount() {}

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <img src={avatar_url} />
        <h2>{location}</h2>
        <h2>{company}</h2>

        <button onClick={() => {}}>count button</button>
        <p>
          <a href="mailto:someone@example.com">Send email</a>
        </p>
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
