import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops the page you are trying to find doesn't exist</h1>
      <h2>{"the Error Message is: "+err.error.message}</h2>
    </div>
  );
};
export default Error;
