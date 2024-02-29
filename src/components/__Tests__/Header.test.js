import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("header", () => {
  // const header =
  // assertion
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const but =screen.getByRole("button",{name:"Sign in"});
  fireEvent.click(but);
  const butl = screen.getByRole("button", { name: "Sign out" });
  
  expect(butl).toBeInTheDocument();
});
