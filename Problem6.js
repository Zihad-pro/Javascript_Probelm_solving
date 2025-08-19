// Problem 6: Sum of All Numbers in an Array

function sumOfNumber(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
sumOfNumber([10, 20, 50]);
