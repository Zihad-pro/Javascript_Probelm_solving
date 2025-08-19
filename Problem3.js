// Problem 3: Check for Palindrome

function isPalindrome(str) {
  str = str.toLowerCase();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

isPalindrome("level");

/*ব্যাখ্যা ঃ
ধাপ-১ ঃ toLowerCase দিয়ে সব অক্ষরকে ছোট হাতে করে নিছি ।
ধাপ-২ ঃ split দিয়ে ভাগ reverse দিয়ে ওল্টো   join দিয়ে জোড়া লাগানো কাজ করছি /

ধাপ-৩ঃ  === দিয়ে value এবং type চেক করেছি যে str এবং reversed সমান কি না ?





*/
