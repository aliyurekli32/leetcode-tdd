//26. Remove Duplicates from Sorted Array
//write test cases using zombie( Z – Zero, O – One, M – Many (or More complex), B – Boundary Behaviors, I – Interface definition , E – Exercise Exceptional behavior, S – Simple Scenarios, Simple Solutions) tdd technique )

const removeDuplicates = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    return 0
};
describe('removeDuplicates', () => {
    it('should remove duplicates from a sorted zore array', () => {
      const nums: number[] = [];
      const expected = 0;
      const result = removeDuplicates(nums);
      expect(result).toBe(expected);
      expect(nums.slice(0, result)).toEqual([]);
    });
    it('should remove duplicates from a sorted one array', () => {
      const nums: number[] = [1];
      const expected = 1;
      const result = removeDuplicates(nums);
      expect(result).toBe(expected);
      expect(nums.slice(0, result)).toEqual([1]);
    });

});












