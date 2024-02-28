import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe('', () => {
    test("should load contact us component", () => {
      render(<ContactUs />);
      const heading = screen.getByRole("heading");
      //Assertion
      expect(heading).toBeInTheDocument();
    });

    test("should load contact us component", () => {
      render(<ContactUs />);
      const butto = screen.getByPlaceholderText("Message");
      //Assertion
      expect(butto).toBeInTheDocument();
    });

    test("should load 2 input box", () => {
      render(<ContactUs />);
      const inputbtn = screen.getAllByRole("textbox");
      //Assertion
      expect(inputbtn.length).toBe(2);
    });
    
});


test("should load contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load contact us component", () => {
  render(<ContactUs />);
  const butto = screen.getByPlaceholderText("Message");
  //Assertion
  expect(butto).toBeInTheDocument();
});

test("should load 2 input box",()=>{
render(<ContactUs/>);
const inputbtn = screen.getAllByRole("textbox");
//Assertion   
expect(inputbtn.length).toBe(2);

});