import { useState } from "react";
const User = (props) => {
    const [count] =useState(0);
    const [count2] = useState(0);
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h2>Software Developer Engineer</h2>
      <h3>{"Bangalore[" + count + "]"}</h3>
      <h3>{"Bangalore[" + count2 + "]"}</h3>
      <p>
        <a href="mailto:someone@example.com">Send email</a>
      </p>
    </div>
  );
};

export default User;
