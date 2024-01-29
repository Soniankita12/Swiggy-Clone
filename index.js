import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi nest"),
    React.createElement("h2", {}, "h2 taggg"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

