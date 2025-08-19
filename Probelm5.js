// Problem 5: Remove Duplicates from an Array

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
removeDuplicate([1, 2, 22, 1, 2, 1]);

/* ব্যখ্যা ঃ
ধাপ-১ ঃ spread operator ... ব্যবহারে set কে আর‍্যেতে রুপান্তর করে । new set হলো ES6  build in method যা special type object যা unique value রাখে ।

*/
