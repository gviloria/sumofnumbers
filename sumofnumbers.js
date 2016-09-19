/**
 * Created by gviloria on 9/18/16.
 */

const testNum = [1,2,3,4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums)
  {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while (i < nums.length){
      total += nums[i];
    i++;
  }
  return total;
}

console.log(sumwhile(testNums));