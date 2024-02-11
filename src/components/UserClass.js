import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location, designation } = this.props;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{designation}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          count button
        </button>
        <p>
          <a href="mailto:someone@example.com">Send email</a>
        </p>
      </div>
    );
  }
}
export default UserClass;
