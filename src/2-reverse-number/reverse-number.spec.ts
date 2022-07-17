import { reverseInteger } from "./reverse-integer"; // Assuming the function to reverse integer is in reverseInteger.ts file

describe("reverseInteger", () => {
  test("should return the reversed integer when the input is positive", () => {
    expect(reverseInteger(123)).toBe(321);
  });

  test("should return the reversed integer when the input is negative", () => {
    expect(reverseInteger(-123)).toBe(-321);
  });

  test("should handle the case when the input ends with zero", () => {
    expect(reverseInteger(120)).toBe(21);
  });

  test("should return 0 when the reversed integer overflows", () => {
    expect(reverseInteger(Math.pow(2, 31))).toBe(0);
    expect(reverseInteger(Math.pow(-2, 31))).toBe(0);
  });
});
