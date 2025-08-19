// Problem 4: Find the Maximum Number

function maxNumber(array) {
  return Math.max(...array);
}
maxNumber([1, 2, 3, 4, 545, 65, 887]);

/*ব্যাখ্যা ঃ

ধাপ-১ ঃ  Math.max হলো সংখ্যার সর্বোচ্চ নির্ণয় করে ।
ধাপ-২ ঃ  ...array দিয়ে spread করা হয়েছে যাতে একধিক সংখ্যা যাচাই করা যাই ।

*/
