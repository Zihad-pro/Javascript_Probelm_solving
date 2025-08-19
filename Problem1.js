// Problem 1: Reverse a String

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");



/* ব্যাখ্যা : 

ধাপ -১ ঃ split হলো কোন একটা কিছু দিয়ে আলাদা ছোট ছোট অংশে ভাগ করার কাজ । 
ধাপ -২ ঃ reverse করা মানে উল্টো দেওয়া । 
ধাপ -৩ঃ join  মানে জোড়া লাগানো । উদাহারণ ঃ
const friend= ["rhidoy, shefat , shohan , shehab"];
console.log(friend.join("|"))
output - rhidoy |shefat | shohan|shehab 

*/
