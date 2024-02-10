import React from "react";
class UserClass extends React.Component{
    render(){
        return (
          <div className="user-card">
            <h2>Name :Ankita Soni</h2>
            <h2>Software Developer Engineer</h2>
            <h3>Bangalore</h3>
            <p>
              <a href="mailto:someone@example.com">Send email</a>
            </p>
          </div>
        );
    }
}
export default UserClass;