import { Sum } from "../Sum";

test("sum function should calculate the sum of two number", () => {
  const res = Sum(13, 7);
  //Assertion
  expect(res).toBe(20);
});
