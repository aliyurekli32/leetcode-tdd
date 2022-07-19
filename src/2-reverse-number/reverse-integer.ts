export const reverseInteger = (num: number): number => {
  if (num >= Math.pow(2, 31) - 1 || num <= Math.pow(-2, 31) || num === 0)
    return 0;
  const isNegative = num < 0;
  num = Math.abs(num);
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return isNegative ? -reversedNum : reversedNum;
};
