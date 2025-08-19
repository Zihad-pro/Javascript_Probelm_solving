
function reverseString(str) {
  // step - 1 split() method

  let splitString = str.split("");
  // console.log(splitString);

  //use reverse() method

  let reverseArray = splitString.reverse();
  // console.log(reverseArray);
  // use join () method
  let joinArray = reverseArray.join("");
  console.log(joinArray);

  return joinArray;
}

reverseString("hello");
