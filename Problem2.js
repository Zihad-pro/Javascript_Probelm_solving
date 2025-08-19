// Problem 2: Count Vowels in a String
const countVowels=(str)=>{
const vowels=["a","e","i","o","u","A","E","I","O","U"];
return str.split("").filter(char=>vowels.includes(char)).length;

}
countVowels("zihad")

/*ব্যাখ্যা ঃ

ধাপ -১ ঃ split  করে শব্দগুলো ছোট ছোট অংশ ভাগ করে  ।
ধাপ -২ঃ filter করে ছাকনিতে জমা করে?
ধাপ-৩ ঃ char হলো লুপ করে ঘুরে ঘুরে চেক করে এবং 
ধাপ-৪ ঃ includes হলো খুজে দেখে আছে কি নাই এবং শেষে length দিয়ে vowels কয়টি সংখ্যায় প্রকাশ করে ।


*/