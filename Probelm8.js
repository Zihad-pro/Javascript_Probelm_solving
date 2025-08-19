// Problem 8: Capitalize First Letter of Each Word
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((L) => L.charAt(0).toUpperCase() + L.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("hello programmer"));
