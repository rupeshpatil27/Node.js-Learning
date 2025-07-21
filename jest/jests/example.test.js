import { checkTypeSum, fetchData, sum } from "../utils/utils.js";

test("adds 1 + 1 to equal 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("check type and add numbers", () => {
  expect(()=>{
    checkTypeSum(1, 1)
  }).toThrow();
});

test("fetch basic data", () => {
 expect(fetchData()).toBe({name:'abc'});
});

