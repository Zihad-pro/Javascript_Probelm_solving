// Problem 7: Find Even Numbers in an Array
function EvenNumber(array) {
  let evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}

console.log(EvenNumber([1, 2, 3, 4, 5, 6, 7, 8])); 