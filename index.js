import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "namaste react");
// React.createElement ->js object -htmlElement(render)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// writing above line of code is clumsy so fb developer created something known as jsx ie javascript  syntax which is easier to create react
//jsx(transpiled before it reaches js )-parcel-babel
// jsx ->React.createElement -> js object ->htmlElement(render) // babel convert jsx into core react
// react Element

const jsxheading = (
  <div>
    <h1 className="dev">hi react</h1>
    <h2>i am in love with you</h2>
  </div>
);
root.render(jsxheading);

// React Component
// Class Based Component (old)

// Functional Component  (new)
const num=10;
const Heading = () => (
  <div>
    <Heading2 />
    {jsxheading}
    <h1>namste react functional component </h1>
    <Heading2/>
    <Heading2></Heading2>
    {Heading2()}
  </div>
);
const Heading2 =  () => 
   <h1>namste react functional component 2</h1>;
;
// Heading ang Heading2 both are same but Heading syntax is better way
// how to render a component
root.render(<Heading />);
