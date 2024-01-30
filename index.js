import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"namaste react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// writing above line of code is clumsy so fb developer created something known as jsx ie javascript  syntax which is easier to create react
//jsx
const jsxheading= <h1> hi jsx</h1>;
root.render(jsxheading);
console.log(jsxheading);