import { twoSum } from "./two-sum";

describe("twoSum", () => {
  test("Example 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const output = [0, 1];
    expect(twoSum(nums, target)).toEqual(output);
  });

  test("Example 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const output = [1, 2];
    expect(twoSum(nums, target)).toEqual(output);
  });

  test("Example 3", () => {
    const nums = [3, 3];
    const target = 6;
    const output = [0, 1];
    expect(twoSum(nums, target)).toEqual(output);
  });

  test("Example 4", () => {
    const nums = [3, 4, 6, 7, 3];
    const target = 6;
    const output = [0, 4];
    expect(twoSum(nums, target)).toEqual(output);
  });

  test("No solution", () => {
    const nums = [1, 2, 3];
    const target = 7;
    expect(twoSum(nums, target)).toBeUndefined();
  });

  test("Negative numbers", () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    const output = [0, 2];
    expect(twoSum(nums, target)).toEqual(output);
  });
});
